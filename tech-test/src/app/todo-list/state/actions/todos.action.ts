import { createAction, props } from "@ngrx/store";
import { ITodo } from "src/app/shared/models/todo.model";
import { ActionTypes } from "./actionTypes";

export const getTodos = createAction(ActionTypes.GET);
export const getTodosSuccess = createAction(
  ActionTypes.GET_SUCCESS,
  props<{ todos: ITodo[] }>()
);
export const getTodosFailure = createAction(
  ActionTypes.GET_FAILURE,
  props<{ msg: string }>()
);
