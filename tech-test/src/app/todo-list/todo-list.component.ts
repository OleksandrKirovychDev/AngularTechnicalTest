import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ITodo } from "../shared/models/todo.model";
import * as TodosActions from "./state/actions/todos.actions";
import {
  selectTodos,
  selectTodo,
  selectSearchedTodos,
} from "./state/selectors/todos.selectors";
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  todosList$: Observable<ITodo[]>;
  todo$: Observable<ITodo>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getTodos();
    this.selectTodos();
  }

  selectTodos(): void {
    this.todosList$ = this.store.select(selectTodos);
  }

  performSearch(value: string): void {
    this.todosList$ = this.store.select(selectSearchedTodos(value));
  }

  selectTodo(id: number): void {
    this.todo$ = this.store.select(selectTodo(id));
  }

  getTodos(): void {
    this.store.dispatch(TodosActions.getTodos());
  }

  addTodo(todo: ITodo) {
    this.store.dispatch(TodosActions.addTodo({ todo }));
  }

  deleteTodo(id: number): void {
    this.store.dispatch(TodosActions.deleteTodo({ id }));
  }

  editTodo(todo: ITodo): void {
    this.store.dispatch(TodosActions.editTodo({ todo }));
  }

  changeStatus(todo: ITodo): void {
    this.store.dispatch(TodosActions.changeTodoStatus({ todo: {...todo, done: !todo.done} }));
  }
}
