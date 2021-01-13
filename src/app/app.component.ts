import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSelectionList } from "@angular/material/list";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("food", { static: true }) public el: MatSelectionList;

  ngOnInit() {
    this.el.selectionChange.subscribe(val =>
      console.log(this.el.selectedOptions.selected.map(e => e.value))
    );
  }
}
