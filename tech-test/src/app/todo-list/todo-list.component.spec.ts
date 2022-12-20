import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { ITodo } from "../shared/models/todo.model";
import * as TodosSelectors from "./state/selectors/todos.selectors";

import {
  addTodo,
  changeTodoStatus,
  deleteTodo,
  editTodo,
  getTodos,
} from "./state/actions/todos.actions";

import { TodoListComponent } from "./todo-list.component";
import { createSelector } from "@ngrx/store";

describe("TodoListComponent", () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: MockStore;
  const mockValue: ITodo[] = [
    {
      label: "",
      description: "",
      category: "",
      done: false,
    },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [provideMockStore({})],
    })
      .overrideTemplate(TodoListComponent, "<p>spam</p>")
      .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  describe("Method: ngOnInit", () => {
    let getTodosSpy;
    let selectTodosSpy;
    beforeEach(() => {
      getTodosSpy = spyOn(component, "getTodos").and.callFake(() => {});
      selectTodosSpy = spyOn(component, "selectTodos").and.callFake(() => {});
    });
    it("should call getTodos()", () => {
      component.ngOnInit();
      expect(getTodosSpy).toHaveBeenCalled();
    });
    it("should call selectTodos()", () => {
      component.ngOnInit();
      expect(selectTodosSpy).toHaveBeenCalled();
    });
  });

  describe("Method: PerformSearch()", () => {
    beforeEach(() => {
      spyOn(store, "select").and.callThrough();
    });
    it("should call selectir", () => {
      component.performSearch("test");
      expect(store.select).toHaveBeenCalled();
    });
  });

  describe("Method: selectTodo()", () => {
    beforeEach(() => {
      spyOn(store, "select").and.callThrough();
    });
    it("should call selectir", () => {
      component.selectTodo(1);
      expect(store.select).toHaveBeenCalled();
    });
  });

  describe("Method: getTodos()", () => {
    let dispatchSpy;
    beforeEach(() => {
      dispatchSpy = spyOn(store, "dispatch").and.callThrough();
    });
    it("should dispatch an action", () => {
      component.getTodos();
      expect(dispatchSpy).toHaveBeenCalledWith(getTodos());
    });
  });

  describe("Method: addTodo()", () => {
    let todo: ITodo = {
      label: "",
      description: "",
      category: "",
      done: false,
    };
    let dispatchSpy;
    beforeEach(() => {
      dispatchSpy = spyOn(store, "dispatch").and.callThrough();
    });
    it("should dispatch an action", () => {
      component.addTodo(todo);
      expect(dispatchSpy).toHaveBeenCalledWith(addTodo({ todo: todo }));
    });
  });

  describe("Method: deleteTodo()", () => {
    let dispatchSpy;
    beforeEach(() => {
      dispatchSpy = spyOn(store, "dispatch").and.callThrough();
    });
    it("should dispatch an action", () => {
      component.deleteTodo(10);
      expect(dispatchSpy).toHaveBeenCalledWith(deleteTodo({ id: 10 }));
    });
  });

  describe("Method: editTodo()", () => {
    let todo: ITodo = {
      label: "",
      description: "",
      category: "",
      done: false,
    };
    let dispatchSpy;
    beforeEach(() => {
      dispatchSpy = spyOn(store, "dispatch").and.callThrough();
    });
    it("should dispatch an action", () => {
      component.editTodo(todo);
      expect(dispatchSpy).toHaveBeenCalledWith(editTodo({ todo }));
    });
  });

  describe("Method: changeStatus", () => {
    let todo: ITodo = {
      label: "",
      description: "",
      category: "",
      done: false,
    };
    let dispatchSpy;
    beforeEach(() => {
      dispatchSpy = spyOn(store, "dispatch").and.callThrough();
    });
    it("should dispatch an action", () => {
      component.changeStatus(todo);
      expect(dispatchSpy).toHaveBeenCalledWith(
        changeTodoStatus({ todo: { ...todo, done: !todo.done } })
      );
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
