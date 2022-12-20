import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ITodo } from "src/app/shared/models/todo.model";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() todo: ITodo;
  @Input() isEditMode: boolean = false;
  @Output() addTodo = new EventEmitter<ITodo>();
  @Output() editTodo = new EventEmitter<ITodo>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    this.updateForm();
  }

  ngOnInit(): void {
    this.initForm();
    this.isEditMode = false;
  }

  initForm(): void {
    this.form = this.fb.group({
      label: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required],
      id: [""],
      done: [false],
    });
  }

  updateForm() {
    this.isEditMode = true;
    this.form.patchValue({
      ...this.todo,
    });
  }

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
    this.form.reset()
  }

  onSubmit(): void {
    if (!this.isEditMode) {
      this.addTodo.emit(this.form.value);
    } else {
      this.editTodo.emit(this.form.value);
    }
  }
}
