import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ITodo } from "src/app/shared/models/todo.model";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit {
  @Output() AddTodo = new EventEmitter<ITodo>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    console.log('test')
    this.form = this.fb.group({
      label: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required],
      done: false,
    });
  }

  onSubmit(): void {
    this.AddTodo.emit(this.form.value);
  }
}
