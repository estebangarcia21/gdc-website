import { gql, useQuery } from '@apollo/client';
import { easeCubicOut } from 'd3-ease';
import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { addTodo, viewTodo } from '../contexts/todo-context/actions';
import { TodoContext } from '../contexts/todo-context/TodoContext';

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
  id: string;
  team: string;
  title: string;
  task: string;
  completed: boolean;
}

interface TodoData {
  todos: Todo[];
}

const TodoCard: React.FC<{ todo: Todo }> = ({ todo }) => {
  const context = useContext(TodoContext);
  const todoObject = context.state.todos.find(t => t.id === todo.id);

  return (
    <div>
      <h1>{todo.title}</h1>
      {todoObject?.isVisible && (
        <motion.p
          initial='hidden'
          animate={todoObject?.isVisible ? 'visible' : 'hidden'}
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
    </div>
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
            const todoObject = context.state.todos.find(t => t.id === todo.id);

            if (todoObject === undefined) {
              context.dispatch(
                addTodo({
                  id: todo.id,
                  isVisible: false,
                })
              );
            }

            return (
              filter === todo.team && (
                <motion.div
                  key={todo.id}
                  className='todo-card'
                  initial='closed'
                  animate={todoObject?.isVisible ? 'opened' : 'closed'}
                  variants={{
                    closed: { height: '150px' },
                    opened: {
                      height: '375px',
                    },
                  }}
                  transition={{ ease: easeCubicOut, duration: 0.55 }}
                  onClick={() => {
                    context.dispatch(viewTodo(todoObject!));
                  }}
                >
                  <TodoCard todo={todo} />
                </motion.div>
              )
            );
          })}
      </div>

      <div id='end' />
    </div>
  );
};

export default Todo;
