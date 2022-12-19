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

export const addTodo = createAction(ActionTypes.ADD, props<{ todo: ITodo }>());
export const addTodoSuccess = createAction(
  ActionTypes.ADD_FAILURE,
  props<{ todo: ITodo }>()
);
export const addTodoFailure = createAction(
  ActionTypes.ADD_FAILURE,
  props<{ msg: string }>()
);

export const deleteTodo = createAction(
  ActionTypes.DELETE,
  props<{ id: number }>()
);
export const deleteTodosSuccess = createAction(
  ActionTypes.DELETE_FAILURE,
  props<{ id: number }>()
);
export const deleteTodosFailure = createAction(
  ActionTypes.DELETE_FAILURE,
  props<{ msg: string }>()
);
