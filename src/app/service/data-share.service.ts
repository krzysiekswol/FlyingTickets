import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  flagSeat = false;
  buttonText = 'Confirm';
  constructor() { }
  setFlagSeatValue(): boolean {
    return this.flagSeat = true;
  }
  getFlagSeatValue(): boolean {
    return this.flagSeat;
  }
}
