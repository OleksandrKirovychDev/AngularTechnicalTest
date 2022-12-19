import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, pipe } from "rxjs";
import { ITodo } from "../shared/models/todo.model";
import * as TodosActions from "./state/actions/todos.action";
import { selectTodos } from "./state/selectors/todos.selector";
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store) {}
  todosList$: Observable<ITodo[]>;

  ngOnInit(): void {
    this.getTodos();
    this.selectTodos();
  }

  getTodos(): void {
    this.store.dispatch(TodosActions.getTodos());
  }

  selectTodos(): void {
    this.todosList$ = this.store.select(selectTodos);
  }

  addTodo(todo: ITodo) {
    this.store.dispatch(TodosActions.addTodo({ todo: todo }));
  }

  deleteTodo(id: number): void {
    this.store.dispatch(TodosActions.deleteTodo({ id: id }));
  }
}
