export interface TodoObject {
  id: number;
  isVisible: boolean;
}

export interface TodoStates {
  todos: TodoObject[];
  filter: string;
}

export const ADD_TODO = 'ADD_TODO';
export const VIEW_TODO = 'VIEW_TODO';
export const SET_FILTER = 'SET_FILTER';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: TodoObject;
}

interface ViewTodoAction {
  type: typeof VIEW_TODO;
  payload: TodoObject;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

export type TodoActionTypes = AddTodoAction | ViewTodoAction | SetFilterAction;
