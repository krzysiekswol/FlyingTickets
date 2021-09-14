import { Injectable } from '@angular/core';
import {TicketReservation} from '../dataModel/ticketReservationModel';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  flagSeat = false;
  buttonText = 'Confirm';
  userTitle = '';
  ticketSummary: TicketReservation = {
    reservationNumber: '',
    passengerFirstName: '',
    passengerLastName: '',
    passportNumber: '',
    flightNumber: '',
    arrivalAirportCode: '',
    departureAirportCode: '',
    flightStartDate: null,
    seatNumber: [null, undefined]
  };
  constructor() { }
  setFlagSeatValue(): boolean {
    return this.flagSeat = true;
  }
  getFlagSeatValue(): boolean {
    return this.flagSeat;
  }
}
