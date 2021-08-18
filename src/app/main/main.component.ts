import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  titleTextFormAirport = 'Start your adventure here';
  minDate: Date = new Date();
  maxDate: Date = new Date (2021, 9, 30);
  constructor() { }
}
