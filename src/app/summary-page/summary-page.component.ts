import { Component, OnInit } from '@angular/core';
import {DataShareService} from '../service/data-share.service';
import {TicketReservation} from '../dataModel/ticketReservationModel';
import {LocalStorageService} from '../service/local-storage.service';
import {DataService} from '../service/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent {
  userTitleSummary = this.dataShareService.userTitle;
  reservation: TicketReservation = {
    reservationNumber: this.dataShareService.ticketSummary.reservationNumber,
    passengerFirstName: this.dataShareService.ticketSummary.passengerFirstName,
    passengerLastName: this.dataShareService.ticketSummary.passengerLastName,
    passportNumber: this.dataShareService.ticketSummary.passportNumber,
    flightNumber: this.dataShareService.ticketSummary.flightNumber,
    arrivalAirportCode: this.dataShareService.ticketSummary.arrivalAirportCode,
    departureAirportCode: this.dataShareService.ticketSummary.departureAirportCode,
    flightStartDate: this.dataShareService.ticketSummary.flightStartDate,
    seatNumber: this.dataShareService.ticketSummary.seatNumber
};
  constructor(private dataShareService: DataShareService,
              private localStorage: LocalStorageService,
              private http: DataService) { }
  setDataForLocalStorage(): number {
    return this.localStorage.dataItems.push(this.reservation);
  }
  setLocalStorage(): void {
    this.http.dataSend = this.reservation;
    this.http.post();
    this.localStorage.setLocalStorage();
  }
}
