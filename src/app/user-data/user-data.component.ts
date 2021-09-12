import { Component, OnInit } from '@angular/core';
import {DataShareService} from '../service/data-share.service';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  titles: string[] = ['Ms.', 'Mrs.'];
  prefixes: number[] = [48, 49, 33, 10];
  constructor(private datashareService: DataShareService) { }
  showLog(): void {
    console.log(this.datashareService.ticketSummary);
  }
  createReservationNumber(): string {
    let reservationNumber = '';
    for (let i = 0; i < 10; i++) {
        const sign = (Math.floor(Math.random() * 10)).toString();
        reservationNumber = sign + reservationNumber;
    }
    return this.datashareService.ticketSummary.reservationNumber = reservationNumber;
  }
  ngOnInit(): void {
  }

}
