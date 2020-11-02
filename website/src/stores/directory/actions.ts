import {
  ADD_DIRECTORY,
  Directory,
  DirectoryActionTypes,
  TOGGLE_DIRECTORY,
} from './types';

export const addDirectory = (directory: Directory): DirectoryActionTypes => {
  return {
    type: ADD_DIRECTORY,
    payload: directory,
  };
};

export const toggleDirectory = (name: string): DirectoryActionTypes => {
  return {
    type: TOGGLE_DIRECTORY,
    payload: name,
  };
};
