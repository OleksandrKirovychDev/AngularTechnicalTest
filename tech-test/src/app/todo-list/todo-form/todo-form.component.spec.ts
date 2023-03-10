import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Subscription } from "rxjs";

import { TodoFormComponent } from "./todo-form.component";

describe("TodoFormComponent", () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
    })
      .overrideTemplate(TodoFormComponent, "<p>spam</p>")
      .compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Method: ngOnChanges()", () => {
    let updateFormSpy;

    beforeEach(() => {
      updateFormSpy = spyOn(component, "updateForm").and.callFake(() => {});
    });

    it("should call udpateForm()", () => {
      component.ngOnChanges();
      expect(updateFormSpy).toHaveBeenCalled();
    });
  });

  describe("Method: ngOnInit()", () => {
    let initFormSpy;

    beforeEach(() => {
      initFormSpy = spyOn(component, "initForm").and.callFake(() => {});
    });
    it("should call initForm()", () => {
      component.ngOnInit();
      expect(initFormSpy).toHaveBeenCalled();
    });
  });

  describe("Method: initForm()", () => {
    it("should init form", () => {
      component.initForm();
      expect(component.form.value.hasOwnProperty("label")).toBeTrue();
      expect(component.form.value.hasOwnProperty("description")).toBeTrue();
      expect(component.form.value.hasOwnProperty("category")).toBeTrue();
      expect(component.form.value.hasOwnProperty("id")).toBeTrue();
      expect(component.form.value.hasOwnProperty("done")).toBeTrue();
    });
  });

  describe("Method: updateForm()", () => {
    beforeEach(() => {
      component.todo = {
        label: "1",
        description: "1",
        category: "1",
        id: 1,
        done: true,
      };
    });
    it("should update values of the form", () => {
      component.updateForm();
      expect(component.form.value).toEqual(component.todo);
    });
  });

  describe("Method: toggleEdit()", () => {
    beforeEach(() => {
      spyOn(component.form, "reset").and.callFake(() => {});
    });
    it("should set editmode to !editmode", () => {
      component.isEditMode = true;
      component.toggleEdit();
      expect(component.isEditMode).toBeFalse();
    });
    it("should reset the form", () => {
      component.toggleEdit();
      expect(component.form.reset).toHaveBeenCalled();
    });
  });

  describe("Method: isEditMode()", () => {
    beforeEach(() => {
      spyOn(component.addTodo, "emit");
      spyOn(component.editTodo, "emit");
    });
    it("should call addTodo emitter if editMode is false", () => {
      component.isEditMode = false;
      component.onSubmit(), expect(component.addTodo.emit).toHaveBeenCalled();
    });
    it("should call editTodo emitter if editMode is true", () => {
      component.isEditMode = true;
      component.onSubmit(), expect(component.editTodo.emit).toHaveBeenCalled();
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
