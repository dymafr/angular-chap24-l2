import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public chips: string[] = ['chip 1', 'chip 2', 'chip 3'];

  toggle(event: MatButtonToggleChange) {
    console.log(event.value);
  }

  removeChip(chip: string) {
    this.chips = this.chips.filter((el) => el !== chip);
  }

  ngOnInit() {}
}
