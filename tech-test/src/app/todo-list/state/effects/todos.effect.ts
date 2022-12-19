import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ITodo } from "src/app/shared/models/todo.model";
import { TodosService } from "../../services/todos.service";
import * as TodosActions from "../actions/todos.action";

@Injectable({
  providedIn: "root",
})
export class TodosEffect {
  getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.getTodos),
      mergeMap(() => {
        return this.todosService.getTodos().pipe(
          map((todos) =>
            TodosActions.getTodosSuccess({
              todos: todos,
            })
          ),
          catchError((msg) => of(TodosActions.getTodosFailure({ msg })))
        );
      })
    );
  });

  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.addTodo),
      mergeMap(({ todo }) => {
        return this.todosService.addTodo(todo).pipe(
          map((todo) =>
            TodosActions.addTodoSuccess({
              todo: todo,
            })
          ),
          catchError((msg) => of(TodosActions.addTodoFailure({ msg })))
        );
      })
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.deleteTodo),
      mergeMap(({ id }) => {
        return this.todosService.deleteTodo(id).pipe(
          map((todo) =>
            TodosActions.deleteTodosSuccess({
              id: todo.id,
            })
          ),
          catchError((msg) => of(TodosActions.deleteTodosFailure({ msg })))
        );
      })
    );
  });

  editTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.editTodo),
      mergeMap(({ todo }) => {
        return this.todosService.editTodo(todo).pipe(
          map((todo) =>
            TodosActions.editTodosSuccess({
              todo: todo,
            })
          ),
          catchError((msg) => of(TodosActions.editTodosFailure({ msg })))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private todosService: TodosService<ITodo>
  ) {}
}
