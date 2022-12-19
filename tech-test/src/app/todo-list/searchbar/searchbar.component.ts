import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"],
})
export class SearchbarComponent implements OnChanges, OnInit {
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.update);
  }

  @Output() update = new EventEmitter<string>();
  search: string;

  changeInput(value: string) {
    this.update.emit(value);
  }
}
