import React, { createContext, Dispatch, useReducer } from 'react';
import { todoReducer } from './reducers';
import { TodoStates } from './types';

const initialState: TodoStates = {
  todos: [],
  filter: 'Programmers',
};

export const TodoContext = createContext<{
  state: TodoStates;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const TodoContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
