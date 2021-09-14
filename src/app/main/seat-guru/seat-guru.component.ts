import {Component} from '@angular/core';
import {DataShareService} from '../../service/data-share.service';
import {DataService} from '../../service/data.service';




@Component({
  selector: 'app-seat-guru',
  templateUrl: './seat-guru.component.html',
  styleUrls: ['./seat-guru.component.scss']
})
export class SeatGuruComponent {
  flagForSeats = true;
  zoom = false;
  rowNumber: [] = [];
  seatLetter: [] = [];
  selectRow: number;
  selectedSeat = '';

  constructor(private dataSharedService: DataShareService, private dataService: DataService) { }
  setFlag(): boolean {
    return this.dataSharedService.getFlagSeatValue();
  }
  setZoom(): any {
    this.zoom = !this.zoom;
  }

  getSeatsForPlane(): void {
    this.rowNumber = [];
    this.seatLetter = [];
    this.flagForSeats = true;
    if (this.flagForSeats) {
      this.dataService.getSeats().subscribe(data => {
        const rowNumberFromBcknd: [] = data.Row;
        const seatsNumberFromBcknd: [] = data.Seats;
        seatsNumberFromBcknd.forEach(item => {
          this.seatLetter.push(item);
        });
        rowNumberFromBcknd.forEach(item => {
          this.rowNumber.push(item);
        });
        });
      }
    this.flagForSeats = false;
  }
  setAircraftTitleName(): string {
    if (this.dataService.aircraftType === 'B788') {
      return 'Boeing 787-800 Dreamliner';
    } else {
      return 'Boeing 737-800';
    }
  }
  setSelectedSeat(): void {
    this.dataSharedService.ticketSummary.seatNumber[0] = this.selectRow;
    this.dataSharedService.ticketSummary.seatNumber[1] = this.selectedSeat;
  }
}




