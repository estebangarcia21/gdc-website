export interface Directory {
  name: string;
  isVisible: boolean;
  depth: number;
}

export interface DirectoryStates {
  directories: Directory[];
}

export const ADD_DIRECTORY = 'ADD_DIRECTORY';
export const TOGGLE_DIRECTORY = 'TOGGLE_DIRECTORY';

interface AddDirectoryAction {
  type: typeof ADD_DIRECTORY;
  payload: Directory;
}

interface ToggleDirectoryAction {
  type: typeof TOGGLE_DIRECTORY;
  payload: string;
}

export type DirectoryActionTypes = AddDirectoryAction | ToggleDirectoryAction;
