import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
import { ITodo } from "src/app/shared/models/todo.model";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit, OnChanges, OnDestroy {
  @Output() AddTodo = new EventEmitter<ITodo>();
  @Output() EditTodo = new EventEmitter<ITodo>();
  @Input() todo: Observable<ITodo>;
  @Input() isBeingEdited: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    this.updateForm();
  }

  ngOnInit(): void {
    this.initForm();
    this.isBeingEdited = false;
  }

  initForm(): void {
    this.form = this.fb.group({
      label: [""],
      description: [""],
      category: [""],
      id: [""],
      done: false,
    });
  }

  updateForm() {
    this.isBeingEdited = true;
    this.todo.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      console.log(res);
      this.form.patchValue({
        label: res.label,
        description: res.description,
        category: res.category,
        id: res.id,
      });
    });
  }

  toggleEdit(): void {
    this.isBeingEdited = !this.isBeingEdited;
    this.form.patchValue({
      label: "",
      description: "",
      category: "",
      id: "",
    });
  }

  onSubmit(): void {
    if (!this.isBeingEdited) {
      this.AddTodo.emit(this.form.value);
    } else {
      this.EditTodo.emit(this.form.value);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
