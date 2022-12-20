import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/models/appState.model";

const todosSelector = (state: IAppState) => state.todos;
const todoSelector = (state: IAppState) => state.todos;
const searchedTotosSelector = (state: IAppState) => state.todos;

export const selectTodos = createSelector(
  todosSelector,
  (state) => state.todos
);

export const selectTodo = (id: number) =>
  createSelector(todoSelector, (state) =>
    state.todos.find((todo) => todo.id === id)
  );

export const selectSearchedTodos = (label: string) =>
  createSelector(searchedTotosSelector, (state) =>
    state.todos.filter((todo) => todo.label.toLowerCase().includes(label.toLowerCase()))
  );
