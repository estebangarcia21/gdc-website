import React, { createContext, Dispatch, useReducer } from 'react';
import Welcome from '../../pages/resource-pages/Welcome';
import { resourceReducer } from './reducers';
import { ResourceStates } from './types';

const initialResourceState: ResourceStates = {
  resources: [
    {
      name: 'Welcome',
      page: Welcome,
      isActive: true,
    },
  ],
};

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
