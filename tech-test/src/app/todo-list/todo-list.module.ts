import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

import { TodoListComponent } from "./todo-list.component";
import { StoreModule } from "@ngrx/store";
import { todosReducer } from "./state/reducers/todos.reducer";
import { TodosEffect } from "./state/effects/todos.effects";
import { ListComponent } from "./list/list.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchbarComponent } from "./searchbar/searchbar.component";

@NgModule({
  declarations: [
    TodoListComponent,
    ListComponent,
    TodoFormComponent,
    SearchbarComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forFeature("todos", todosReducer),
    EffectsModule.forFeature([TodosEffect]),
  ],
  exports: [TodoListComponent],
})
export class TodoListModule {}
