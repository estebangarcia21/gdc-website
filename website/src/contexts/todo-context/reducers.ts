import {
  ADD_TODO,
  SET_FILTER,
  TodoActionTypes,
  TodoStates,
  VIEW_TODO,
} from './types';

export const todoReducer = (
  state: TodoStates,
  action: TodoActionTypes
): TodoStates => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case VIEW_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                isVisible: !todo.isVisible,
              }
            : {
                ...todo,
                isVisible: false,
              }
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
