import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_TODOS = gql`
  {
    todos {
      id
      group
      name
      value
      completed
    }
  }
`;

interface Todo {
  id: number;
  group: string;
  name: string;
  value: string;
  completed: boolean;
}

interface TodoData {
  todos: Todo[];
}

const Todos: React.FC = () => {
  const { data, loading } = useQuery<TodoData>(GET_TODOS);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: 'black' }}>
      {data &&
        data.todos.map(todo => (
          <div key={todo.id}>
            <p>{todo.name}</p>
            <p>{todo.group}</p>
            <p>{todo.completed}</p>
            <p>{todo.value}</p>
            <br />
          </div>
        ))}
    </div>
  );
};

export default Todos;
