import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, pipe } from "rxjs";
import { ITodo } from "../shared/models/todo.model";
import * as TodosActions from "./state/actions/todos.action";
import {
  selectTodos,
  selectTodo,
  selectSearchedTodos,
} from "./state/selectors/todos.selector";
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store) {}
  todosList$: Observable<ITodo[]>;
  todo$: Observable<ITodo>;
  todoToEdit: ITodo;

  ngOnInit(): void {
    this.getTodos();
    this.selectTodos();
  }

  selectTodos(): void {
    this.todosList$ = this.store.select(selectTodos);
  }

  selectTodo(id: number): void {
    this.todo$ = this.store.select(selectTodo(id));
  }

  getTodos(): void {
    this.store.dispatch(TodosActions.getTodos());
  }

  addTodo(todo: ITodo) {
    this.store.dispatch(TodosActions.addTodo({ todo: todo }));
  }

  deleteTodo(id: number): void {
    this.store.dispatch(TodosActions.deleteTodo({ id: id }));
  }

  editTodo(todo: ITodo): void {
    this.store.dispatch(TodosActions.editTodo({ todo: todo }));
  }

  changeStatus(todo: ITodo): void {
    this.store.dispatch(TodosActions.changeTodoStatus({ todo: todo }));
  }

  performSearch(value: string): void {
    this.todosList$ = this.store.select(selectSearchedTodos(value));
  }
}
