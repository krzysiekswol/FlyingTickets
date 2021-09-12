import { Component, OnInit } from '@angular/core';
import {DataShareService} from '../service/data-share.service';
import {TicketReservation} from '../dataModel/ticketReservationModel';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  reservation: Partial<TicketReservation> = {
    reservationNumber: this.dataShareService.ticketSummary.reservationNumber
  };
  constructor(private dataShareService: DataShareService) { }
  ngOnInit(): void {
  }

}
