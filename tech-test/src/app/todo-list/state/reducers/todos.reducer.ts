import { createReducer, on } from "@ngrx/store";
import { ITodoState } from "src/app/shared/models/todo.model";
import * as TodosActions from "../actions/todos.action";

export const initialState: ITodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const todosReducers = createReducer(
  initialState,
  on(TodosActions.getTodos, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TodosActions.getTodosSuccess, (state, { todos }) => {
    return {
      ...state,
      userFields: [...todos],
      isLoading: false,
    };
  }),
  on(TodosActions.getTodosFailure, (state, { msg }) => ({
    ...state,
    error: msg,
  }))
);
