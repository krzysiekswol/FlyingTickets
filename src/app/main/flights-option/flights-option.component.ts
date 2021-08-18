import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-option',
  templateUrl: './flights-option.component.html',
  styleUrls: ['./flights-option.component.css']
})
export class FlightsOptionComponent implements OnInit {
  flag = false;
  constructor() { }

  ngOnInit(): void {
  }

}
