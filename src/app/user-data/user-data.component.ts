import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  titles: string[] = ['Ms.', 'Mrs.'];
  prefixes: number[] = [48, 49, 33, 10];
  constructor() { }

  ngOnInit(): void {
  }

}
