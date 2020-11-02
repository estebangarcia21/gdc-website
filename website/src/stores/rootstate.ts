import { directoryReducer } from './directory/reducers';

const rootReducer = directoryReducer;

export type RootState = ReturnType<typeof rootReducer>;
