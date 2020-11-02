export interface Resource {
  name: string;
  page: any;
  isActive: boolean;
}

export interface ResourceStates {
  resources: Resource[];
}

export const ADD_RESOURCE = 'ADD_RESOURCE';
export const SET_ACTIVE = 'SET_ACTIVE';

interface AddResourceAction {
  type: typeof ADD_RESOURCE;
  payload: Resource;
}

interface SetActiveAction {
  type: typeof SET_ACTIVE;
  payload: string;
}

export type ResourceActionTypes = AddResourceAction | SetActiveAction;
