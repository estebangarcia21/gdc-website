import {
  ADD_RESOURCE,
  Resource,
  ResourceActionTypes,
  SET_ACTIVE,
} from './types';

export const addResource = (resource: Resource): ResourceActionTypes => {
  return {
    type: ADD_RESOURCE,
    payload: resource,
  };
};

export const setActive = (name: string): ResourceActionTypes => {
  return {
    type: SET_ACTIVE,
    payload: name,
  };
};
