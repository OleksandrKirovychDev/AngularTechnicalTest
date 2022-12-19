import { createReducer, on } from "@ngrx/store";
import { ITodoState } from "src/app/shared/models/todo.model";
import * as TodosActions from "../actions/todos.action";

export const initialState: ITodoState = {
  todos: [],
  isLoading: false,
  error: "",
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
      todos: [...todos],
      isLoading: false,
    };
  }),
  on(TodosActions.getTodosFailure, (state, { msg }) => ({
    ...state,
    error: msg,
  })),
  on(TodosActions.addTodo, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TodosActions.addTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
    isLoading: false,
  })),
  on(TodosActions.addTodoFailure, (state, { msg }) => ({
    ...state,
    error: msg,
  })),
  on(TodosActions.deleteTodo, (state, { id }) => ({
    ...state,
    todos: [...state.todos.filter((todo) => todo.id !== id)],
    isLoading: true,
  })),
  on(TodosActions.deleteTodosSuccess, (state, { id }) => ({
    ...state,
    todos: [...state.todos.filter((todo) => todo.id !== id)],
    isLoading: false,
  })),
  on(TodosActions.deleteTodosFailure, (state, { msg }) => ({
    ...state,
    error: msg,
  }))
);
