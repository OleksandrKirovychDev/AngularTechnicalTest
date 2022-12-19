import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "src/app/shared/models/todo.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  @Output() DeleteTodo = new EventEmitter<number>();
  @Output() EditTodo = new EventEmitter<number>();

  @Input() todosList: ITodo[];
  constructor() {}

  onDeleteTodo(id: number): void {
    this.DeleteTodo.emit(id);
  }

  onEditTodo(id: number) {
    this.EditTodo.emit(id);
  }
}
