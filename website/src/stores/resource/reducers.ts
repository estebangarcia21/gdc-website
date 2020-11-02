import {
  ResourceStates,
  ResourceActionTypes,
  ADD_RESOURCE,
  SET_ACTIVE,
} from './types';

const initialState: ResourceStates = {
  resources: [],
};

export const resourceReducer = (
  state = initialState,
  action: ResourceActionTypes
): ResourceStates => {
  switch (action.type) {
    case ADD_RESOURCE:
      return {
        ...state,
        resources: [...state.resources, action.payload],
      };
    case SET_ACTIVE:
      const resources = state.resources.map(resource =>
        resource.name === action.payload
          ? {
              ...resource,
              isActive: true,
            }
          : {
              ...resource,
              isActive: false,
            }
      );

      return {
        ...state,
        resources,
      };
    default:
      return state;
  }
};
