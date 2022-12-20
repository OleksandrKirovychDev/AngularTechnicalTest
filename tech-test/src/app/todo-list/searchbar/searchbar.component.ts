import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"],
})
export class SearchbarComponent {
  @Output() update = new EventEmitter<string>();
  search: string;

  changeInput(value: string) {
    this.update.emit(value);
  }
}
