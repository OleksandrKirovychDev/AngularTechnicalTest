import { createReducer, on } from "@ngrx/store";
import { ITodoState } from "../models/state.models";
import * as TodosActions from "../actions/todos.actions";

export const initialState: ITodoState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const todosReducer = createReducer(
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
  })),
  on(TodosActions.editTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos.map((t) => (t.id !== todo.id ? t : todo))],
    isLoading: true,
  })),
  on(TodosActions.editTodosSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos.map((t) => (t.id !== todo.id ? t : todo))],
    isLoading: false,
  })),
  on(TodosActions.editTodosFailure, (state, { msg }) => ({
    ...state,
    error: msg,
  })),
  on(TodosActions.editTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos.map((t) => (t.id !== todo.id ? t : todo))],
    isLoading: true,
  })),
  on(TodosActions.changeTodoStatus, (state, { todo }) => ({
    ...state,
    todos: [
      ...state.todos.map((t) =>
        t.id !== todo.id ? t : { ...todo, done: !todo.done }
      ),
    ],
    isLoading: true,
  })),
  on(TodosActions.changeTodoStatusSuccess, (state, { todo }) => ({
    ...state,
    todos: [
      ...state.todos.map((t) =>
        t.id !== todo.id ? t : { ...todo, done: todo.done }
      ),
    ],
    isLoading: false,
  })),
  on(TodosActions.changeTodoStatusFailure, (state, { msg }) => ({
    ...state,
    error: msg,
  }))
);
