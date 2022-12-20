import { ITodo } from "../../../shared/models/todo.model";

export interface IAppState {
  todos: ITodoState;
}

export interface ITodoState {
  todos: Array<ITodo>;
  isLoading: boolean;
  error: string;
}
