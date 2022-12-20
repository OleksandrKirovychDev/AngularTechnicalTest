import { TestBed } from "@angular/core/testing";
import { ITodo } from "src/app/shared/models/todo.model";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TodosService } from "./todos.service";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

describe("TodoService", () => {
  let service: TodosService<ITodo>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  httpClientSpy = jasmine.createSpyObj("HttpClient", [
    "get",
    "post",
    "delete",
    "patch",
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodosService],
    });
    service = TestBed.inject(TodosService);
    service = new TodosService(httpClientSpy);
  });

  describe("Method: getTodos()", () => {
    const expectedRes: ITodo[] = [];
    it("should get todos", (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(expectedRes));
      service.getTodos().subscribe({
        next: (res) => {
          expect(res).toEqual(expectedRes);
          done();
        },
        error: done.fail,
      });
      expect(httpClientSpy.get.calls.count()).toBe(1);
    });
  });

  describe("Method: addTodo()", () => {
    const todo: ITodo = {
      label: "",
      description: "",
      category: "",
      done: false,
    };
    it("should add todo", (done: DoneFn) => {
      httpClientSpy.post.and.returnValue(of(todo));
      service.addTodo(todo).subscribe({
        next: (res) => {
          expect(res).toEqual(todo);
          done();
        },
        error: done.fail,
      });
      expect(httpClientSpy.post.calls.count()).toBe(1);
    });
  });

  describe("Method: deleteTodo()", () => {
    const todo: ITodo = {
      label: "",
      description: "",
      category: "",
      id: 1,
      done: false,
    };
    it("should delete todo", (done: DoneFn) => {
      httpClientSpy.delete.and.returnValue(of(todo));
      service.deleteTodo(todo.id).subscribe({
        next: (res) => {
          expect(res).toEqual(todo);
          done();
        },
        error: done.fail,
      });
      expect(httpClientSpy.delete.calls.count()).toBe(1);
    });
  });

  describe("Method: editTodo()", () => {
    const todo: ITodo = {
      label: "",
      description: "",
      category: "",
      id: 1,
      done: false,
    };
    it("should edit todo", (done: DoneFn) => {
      httpClientSpy.patch.and.returnValue(of(todo));
      service.editTodo(todo).subscribe({
        next: (res) => {
          expect(res).toEqual(todo);
          done();
        },
        error: done.fail,
      });
      expect(httpClientSpy.patch.calls.count()).toBe(1);
    });
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
