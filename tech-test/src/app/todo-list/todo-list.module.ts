import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListComponent } from "./todo-list.component";
import { StoreModule } from "@ngrx/store";
import { todosReducers } from "./state/reducers/todos.reducer";

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature("todos", { reducer: todosReducers }),
  ],
  exports: [TodoListComponent],
})
export class TodoListModule {}
