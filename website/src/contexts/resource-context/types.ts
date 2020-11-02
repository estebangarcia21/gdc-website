export interface ResourceObject {
  name: string;
  page: React.FC;
  isActive: boolean;
}

export interface ResourceStates {
  resources: ResourceObject[];
}

export const ADD_RESOURCE = 'ADD_RESOURCE';
export const VIEW_RESOURCE = 'VIEW_RESOURCE';

interface AddResourceAction {
  type: typeof ADD_RESOURCE;
  payload: ResourceObject;
}

interface ViewResourceAction {
  type: typeof VIEW_RESOURCE;
  payload: ResourceObject;
}

export type ResourceActionTypes = AddResourceAction | ViewResourceAction;
