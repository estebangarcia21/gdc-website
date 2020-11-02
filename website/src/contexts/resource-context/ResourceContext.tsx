import React, { createContext, Dispatch, useReducer } from 'react';
import { initialResourceState, resourceReducer } from './reducers';
import { ResourceStates } from './types';

export const ResourceContext = createContext<{
  state: ResourceStates;
  dispatch: Dispatch<any>;
}>({
  state: initialResourceState,
  dispatch: () => null,
});

export const ResourceContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(resourceReducer, initialResourceState);

  return (
    <ResourceContext.Provider value={{ state, dispatch }}>
      {children}
    </ResourceContext.Provider>
  );
};
