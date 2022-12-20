import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "src/app/shared/models/todo.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<number>();
  @Output() chageStatus = new EventEmitter<ITodo>();

  @Input() todosList: ITodo[];
  constructor() {}

  onDeleteTodo(id: number): void {
    this.deleteTodo.emit(id);
  }

  onEditTodo(id: number) {
    this.editTodo.emit(id);
  }

  changeStatus(todo: ITodo): void {
    this.chageStatus.emit(todo);
  }
}
