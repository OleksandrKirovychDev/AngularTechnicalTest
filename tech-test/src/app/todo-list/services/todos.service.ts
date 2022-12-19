import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TodosService<ITodo> {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${environment.BASE_URL}`);
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(`${environment.BASE_URL}`, todo);
  }

  deleteTodo(id: number): Observable<number> {
    return this.http.delete<number>(`${environment.BASE_URL}/${id}`);
  }
}
