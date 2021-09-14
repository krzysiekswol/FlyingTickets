import { Injectable } from '@angular/core';
import {TicketReservation} from '../dataModel/ticketReservationModel';

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
}
