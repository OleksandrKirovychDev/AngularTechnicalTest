import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { ITodo } from "src/app/shared/models/todo.model";
import { ListComponent } from "./list.component";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Method: onDeleteTodo()", () => {
    beforeEach(() => {
      spyOn(component.deleteTodo, "emit");
    });
    it("should emit an id", () => {
      component.onDeleteTodo(1);
      expect(component.deleteTodo.emit).toHaveBeenCalledWith(1);
    });
  });

  describe("Method: editTodo()", () => {
    beforeEach(() => {
      spyOn(component.editTodo, "emit");
    });
    it("should emit an id", () => {
      component.onEditTodo(1);
      expect(component.editTodo.emit).toHaveBeenCalledWith(1);
    });
  });

  describe("Method: changeStatus()", () => {
    const mockValue: ITodo = {
      label: "",
      description: "",
      category: "",
      done: false,
    };
    beforeEach(() => {
      spyOn(component.chageStatus, "emit");
    });
    it("should emit a todo", () => {
      component.changeStatus(mockValue);
      expect(component.chageStatus.emit).toHaveBeenCalledWith(mockValue);
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
