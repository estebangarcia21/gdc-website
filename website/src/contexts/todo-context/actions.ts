import {
    ADD_TODO,
    SET_FILTER,
    TodoActionTypes,
    TodoObject,
    VIEW_TODO,
} from "./types";

export const addTodo = (todo: TodoObject): TodoActionTypes => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};

export const viewTodo = (todo: TodoObject): TodoActionTypes => {
    return {
        type: VIEW_TODO,
        payload: todo,
    };
};

export const setFilter = (team: string): TodoActionTypes => {
    return {
        type: SET_FILTER,
        payload: team,
    };
};
