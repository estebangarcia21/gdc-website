import Welcome from '../../pages/resource-pages/programmers/Welcome';
import {
  ADD_RESOURCE,
  ResourceActionTypes,
  ResourceStates,
  VIEW_RESOURCE,
} from './types';

export const initialResourceState: ResourceStates = {
  resources: [
    {
      name: 'Welcome',
      page: Welcome,
      isActive: true,
    },
  ],
};

export const resourceReducer = (
  state = initialResourceState,
  action: ResourceActionTypes
): ResourceStates => {
  switch (action.type) {
    case ADD_RESOURCE:
      return {
        resources: [...state.resources, action.payload],
      };
    case VIEW_RESOURCE:
      return {
        resources: state.resources.map(resource =>
          resource.name === action.payload.name
            ? {
                ...resource,
                isActive: true,
              }
            : {
                ...resource,
                isActive: false,
              }
        ),
      };
    default:
      return state;
  }
};
