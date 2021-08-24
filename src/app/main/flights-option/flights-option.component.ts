import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flights-option',
  templateUrl: './flights-option.component.html',
  styleUrls: ['./flights-option.component.scss']
})
export class FlightsOptionComponent implements OnInit {
  @Input() flag;
  @Input() airport;
  @Input() carrier;
  @Input() weather;
  @Input() imgSrcPath;
  constructor() { }

  ngOnInit(): void {
  }

}
