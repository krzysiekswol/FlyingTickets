import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../service/local-storage.service';
import {objectKeys} from 'codelyzer/util/objectKeys';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit{
  arr = [];
  constructor(private localStorage: LocalStorageService) { }
  ngOnInit(): any {
    this.showData();
  }
  showData(): {} {
    const data = this.localStorage.getLocalStorage();
    const objSize = Object.keys(data).length;
    for (let i = 0; i < objSize; i++) {
        this.arr.push(data[i]);
    }
    return this.arr;
  }
}
