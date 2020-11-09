import { gql, useMutation, useQuery } from '@apollo/client';
import { easeCubicOut } from 'd3-ease';
// @ts-ignore
import FlareComponent from 'flare-react';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useReducer, useState } from 'react';
// @ts-ignore
import loadingAnimation from '../assets/animations/loading.flr';
import checkmark from '../assets/svgs/checkmark.svg';
import redx from '../assets/svgs/red-x.svg';
import { addTodo, setFilter, viewTodo } from '../contexts/todo-context/actions';
import { TodoContext } from '../contexts/todo-context/TodoContext';

const GET_TODOS_BY_TEAM = gql`
  query GetTodos($team: String!) {
    getTodosByTeam(team: $team) {
      id
      team
      title
      assignee
      task
      completed
    }
  }
`;

const TOGGLE_COMPLETION = gql`
  mutation ToggleTodoCompletion($id: Float!) {
    toggleCompletion(id: $id) {
      id
      completed
    }
  }
`;

interface Todo {
  id: number;
  team: string;
  title: string;
  assignee: string;
  task: string;
  completed: boolean;
}

interface TodoVariables {
  team: string;
}

interface TodoData {
  getTodosByTeam: Todo[];
}

const TodoList: React.FC = () => {
  const context = useContext(TodoContext);
  const filter = context.state.filter;

  const { data, loading } = useQuery<TodoData, TodoVariables>(
    GET_TODOS_BY_TEAM,
    {
      variables: {
        team: filter,
      },
    }
  );

  return (
    <div id='todo-container'>
      {loading ? (
        <div>
          <FlareComponent
            width={75}
            height={75}
            animationName='loading'
            file={loadingAnimation}
          />
        </div>
      ) : (
        data?.getTodosByTeam.map(todo => {
          return (
            <div style={{ opacity: todo.completed ? 0.5 : 1 }}>
              <TodoCard todo={todo} />
            </div>
          );
        })
      )}
    </div>
  );
};

const TodoCard: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [isHovered, setHovered] = useState(false);

  const context = useContext(TodoContext);
  const todoState = context.state.todos.find(t => t.id === todo.id);

  useEffect(() => {
    if (todoState === undefined) {
      context.dispatch(
        addTodo({
          id: todo.id,
          isVisible: false,
        })
      );
    }
  }, [context, todoState, todo]);

  const [markTodoAsComplete] = useMutation<{ toggleCompletion: Todo }>(
    TOGGLE_COMPLETION,
    {
      variables: { id: todo.id },
    }
  );

  return (
    <motion.div
      className='todo-card'
      initial='closed'
      animate={todoState?.isVisible ? 'opened' : 'closed'}
      variants={{
        closed: { height: '150px' },
        opened: {
          height: '500px',
        },
      }}
      transition={{ ease: easeCubicOut, duration: 0.55 }}
      onClick={() => {
        context.dispatch(viewTodo(todoState!));
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: isHovered
          ? todo.completed
            ? '#4af09d'
            : '#f0524a'
          : 'rgb(36, 36, 36)',
      }}
    >
      <h1>{todo.title}</h1>

      <div id='icon'>
        {todo.completed ? (
          <img src={checkmark} width='32px' alt='Finished' />
        ) : (
          <img src={redx} width='32px' alt='Not Finished' />
        )}
      </div>

      <p id='name'>{todo.assignee}</p>

      {todoState?.isVisible && (
        <motion.p
          initial='hidden'
          animate={todoState?.isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: {
              opacity: 0,
              display: 'none',
            },
            visible: {
              opacity: 1,
              display: 'inherit',
            },
          }}
          transition={{
            delay: 0.15,
          }}
        >
          {!todo.completed && (
            <div id='complete-icon'>
              <img
                src={checkmark}
                width='42px'
                alt='Finished'
                onClick={() => {
                  markTodoAsComplete();
                }}
              />
            </div>
          )}
          {todo.task}
        </motion.p>
      )}
    </motion.div>
  );
};

const Todo: React.FC = () => {
  const [isDroppedDown, setDroppedDown] = useState(false);

  const context = useContext(TodoContext);
  const filter = context.state.filter;

  enum Filters {
    Programmers = 'Programmers',
    Artists = 'Artists',
    Writers = 'Writers',
    Musicians = 'Musicians',
    Animators = 'Animators',
  }

  const dropdowns: JSX.Element[] = [];

  for (const filter in Filters) {
    dropdowns.push(
      <p
        onClick={() => {
          context.dispatch(setFilter(filter));
        }}
      >
        {filter}
      </p>
    );
  }

  return (
    <div className='background-a' style={{ textAlign: 'center' }}>
      <h1>To-Dos</h1>

      <div
        id='dropdown-filter'
        onClick={() => {
          setDroppedDown(!isDroppedDown);
        }}
      >
        <p>{filter}</p>
        {isDroppedDown && <div id='dropdown-filter-content'>{dropdowns}</div>}
      </div>

      <TodoList />

      <div id='end' />
    </div>
  );
};

export default Todo;
