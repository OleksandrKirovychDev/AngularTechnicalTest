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

export const editTodo = createAction(
  ActionTypes.EDIT,
  props<{ todo: ITodo }>()
);
export const editTodosSuccess = createAction(
  ActionTypes.EDIT_SUCCESS,
  props<{ todo: ITodo }>()
);
export const editTodosFailure = createAction(
  ActionTypes.EDIT_SUCCESS,
  props<{ msg: string }>()
);

export const changeTodoStatus = createAction(
  ActionTypes.CHANGE_STATUS,
  props<{ todo: ITodo }>()
);
export const changeTodoStatusSuccess = createAction(
  ActionTypes.CHANGE_STATUS_SUCCESS,
  props<{ todo: ITodo }>()
);
export const changeTodoStatusFailure = createAction(
  ActionTypes.CHANGE_STATUS_FAILURE,
  props<{ msg: string }>()
);
