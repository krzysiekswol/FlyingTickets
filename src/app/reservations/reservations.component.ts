import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../service/local-storage.service';


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
    if (this.localStorage.getLocalStorage() === null) {
    } else {
      const data = this.localStorage.getLocalStorage();
      const objSize = Object.keys(data).length;
      for (let i = 0; i < objSize; i++) {
        this.arr.push(data[i]);
      }
      return this.arr;
    }
  }
  clearData(): void {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      this.arr = [];
      this.localStorage.clearLocalStorage();
    }
  }
}
