export interface Game {
    id: number;
    title: string;
    description: string;
    year_created: number;
    downloads: number;
}

export interface Todo {
    id: number;
    team: string;
    assignee: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface CreateGameInput extends Omit<Game, "id"> {}
export interface CreateTodoInput extends Omit<Todo, "id"> {}
