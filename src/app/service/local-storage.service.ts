import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  dataItems = [];
  constructor() {}
  setLocalStorage(): void {
    localStorage.setItem('key', JSON.stringify(this.dataItems));
  }
  getLocalStorage(): {} {
    return JSON.parse(localStorage.getItem('key'));
  }
  clearLocalStorage(): void {
    localStorage.clear();
  }
}
