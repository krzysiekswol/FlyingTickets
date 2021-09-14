import { Component, OnInit } from '@angular/core';
import {DataShareService} from '../service/data-share.service';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  titles: string[] = ['Ms.', 'Mrs.'];
  firstName = '';
  lastName = '';
  passportIDSerie = '';
  passportIDNumber: number;
  email = '';
  userTitle = '';
  constructor(private datashareService: DataShareService) { }
  savePersonalData(): void {
    this.datashareService.ticketSummary.passengerFirstName = this.firstName;
    this.datashareService.ticketSummary.passengerLastName = this.lastName;
    this.datashareService.ticketSummary.passportNumber = this.passportIDSerie + this.passportIDNumber;
    this.datashareService.userTitle = this.userTitle;
  }
  createReservationNumber(): string {
    let reservationNumber = '';
    for (let i = 0; i < 5; i++) {
        const sign = (Math.floor(Math.random() * 10)).toString();
        reservationNumber = sign + reservationNumber;
    }
    return this.datashareService.ticketSummary.reservationNumber = reservationNumber;
  }
  disabledButton(): boolean {
    if (this.firstName && this.lastName && this.passportIDNumber && this.passportIDSerie && this.email) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit(): void {
  }

}
