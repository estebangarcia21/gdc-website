import { combineReducers } from 'redux';
import { directoryReducer } from './directory/reducers';
import { resourceReducer } from './resource/reducers';

export const rootReducer = combineReducers({
  directories: directoryReducer,
  resources: resourceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
