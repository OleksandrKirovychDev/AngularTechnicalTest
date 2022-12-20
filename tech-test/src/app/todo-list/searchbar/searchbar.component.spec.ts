import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchbarComponent } from "./searchbar.component";

describe("SearchbarComponent", () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Method: ChangeInput()", () => {
    beforeEach(() => {
      spyOn(component.update, "emit");
    });
    it("should emit a string", () => {
      component.changeInput("test");
      expect(component.update.emit).toHaveBeenCalledWith("test");
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
