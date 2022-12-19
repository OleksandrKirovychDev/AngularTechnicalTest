import { Component, OnInit } from "@angular/core";
import { ITodo } from "../shared/models/todo.model";
import { TodosService } from "./services/todos.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  constructor(private todosService: TodosService<ITodo>) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getTodos().subscribe((res) => console.log(res));
  }
}
