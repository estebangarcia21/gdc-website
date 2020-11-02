import {
  ADD_DIRECTORY,
  DirectoryActionTypes,
  DirectoryStates,
  TOGGLE_DIRECTORY,
} from './types';

const initialState: DirectoryStates = {
  directories: [],
};

export const directoryReducer = (
  state = initialState,
  action: DirectoryActionTypes
): DirectoryStates => {
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
