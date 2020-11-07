import { gql, useQuery } from '@apollo/client';
import { easeCubicOut } from 'd3-ease';
import { m, motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { addTodo, viewTodo } from '../contexts/todo-context/actions';
import { TodoContext } from '../contexts/todo-context/TodoContext';
import redx from '../assets/svgs/red-x.svg';
import checkmark from '../assets/svgs/checkmark.svg';

const GET_TODOS = gql`
  {
    todos {
      id
      team
      title
      task
      completed
    }
  }
`;

interface Todo {
  id: number;
  team: string;
  title: string;
  task: string;
  completed: boolean;
}

interface TodoData {
  todos: Todo[];
}

const TodoCard: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [isHovered, setHovered] = useState(false);

  const context = useContext(TodoContext);
  const state = context.state.todos.find(t => t.id === todo.id);

  useEffect(() => {
    if (state === undefined) {
      context.dispatch(
        addTodo({
          id: todo.id,
          isVisible: false,
        })
      );
    }
  }, [context, state, todo]);

  return (
    <motion.div
      className='todo-card'
      initial='closed'
      animate={state?.isVisible ? 'opened' : 'closed'}
      variants={{
        closed: { height: '150px' },
        opened: {
          height: '500px',
        },
      }}
      transition={{ ease: easeCubicOut, duration: 0.55 }}
      onClick={() => {
        context.dispatch(viewTodo(state!));
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
      {state?.isVisible && (
        <motion.p
          initial='hidden'
          animate={state?.isVisible ? 'visible' : 'hidden'}
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

  const { data, loading } = useQuery<TodoData>(GET_TODOS);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='background-a' style={{ textAlign: 'center' }}>
      <h1>Todos</h1>

      <button
        id='dropdown-filter'
        onClick={() => {
          setDroppedDown(!isDroppedDown);
        }}
      >
        <p>{filter}</p>
        {isDroppedDown && (
          <div id='dropdown-filter-content'>
            <button>Artist</button>
            <button>yum --fix</button>
            <button>yum --fix</button>
            <button>yum --fix</button>
            <button>yum --fix</button>
          </div>
        )}
      </button>

      <div id='todo-container'>
        {data &&
          data.todos.map(todo => {
            return (
              filter === todo.team && (
                <div key={todo.id}>
                  <TodoCard todo={todo} />
                </div>
              )
            );
          })}
      </div>

      <div id='end' />
    </div>
  );
};

export default Todo;
