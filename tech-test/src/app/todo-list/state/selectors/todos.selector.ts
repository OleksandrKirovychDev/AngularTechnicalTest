import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/models/appState.model";

const todosSelector = (state: IAppState) => state.todos;

export const selectTodos = createSelector(todosSelector, (state) => state.todos);
