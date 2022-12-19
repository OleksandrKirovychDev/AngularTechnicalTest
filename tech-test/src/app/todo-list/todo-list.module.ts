import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TodoListComponent } from "./todo-list.component";
import { StoreModule } from "@ngrx/store";
import { todosReducers } from "./state/reducers/todos.reducer";
import { TodosEffect } from "./state/effects/todos.effect";
import { ListComponent } from "./list/list.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TodoListComponent, ListComponent, TodoFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forFeature("todos", todosReducers),
    EffectsModule.forFeature([TodosEffect]),
  ],
  exports: [TodoListComponent],
})
export class TodoListModule {}
