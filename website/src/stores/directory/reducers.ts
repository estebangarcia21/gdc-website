import {
  ADD_DIRECTORY,
  DirectoryActionTypes,
  DirectoryState,
  TOGGLE_DIRECTORY,
} from './types';

const initialState: DirectoryState = {
  directories: [],
};

export const directoryReducer = (
  state = initialState,
  action: DirectoryActionTypes
): DirectoryState => {
  switch (action.type) {
    case ADD_DIRECTORY:
      return {
        ...state,
        directories: [...state.directories, action.payload],
      };
    case TOGGLE_DIRECTORY:
      const directories = state.directories.map(directory =>
        directory.name === action.payload
          ? {
              ...directory,
              isVisible: !directory.isVisible,
            }
          : directory
      );

      return {
        ...state,
        directories: directories,
      };
    default:
      return state;
  }
};
