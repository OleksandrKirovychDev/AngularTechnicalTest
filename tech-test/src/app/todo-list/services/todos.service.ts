import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ITodo } from "src/app/shared/models/todo.model";

@Injectable({
  providedIn: "root",
})
export class TodosService<T> {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<T[]> {
    return this.http.get<T[]>(`${environment.BASE_URL}`);
  }

  addTodo(todo: ITodo): Observable<T> {
    return this.http.post<T>(`${environment.BASE_URL}`, todo);
  }

  deleteTodo(id: number): Observable<T> {
    return this.http.delete<T>(`${environment.BASE_URL}/${id}`);
  }

  editTodo(todo: ITodo): Observable<T> {
    return this.http.patch<T>(`${environment.BASE_URL}/${todo.id}`, todo);
  }
}
