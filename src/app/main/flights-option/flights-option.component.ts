import {Component, Input} from '@angular/core';
import {DataShareService} from '../../service/data-share.service';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-flights-option',
  templateUrl: './flights-option.component.html',
  styleUrls: ['./flights-option.component.scss']
})
export class FlightsOptionComponent {
  @Input() flag;
  @Input() airport;
  @Input() carrier;
  @Input() weather;
  @Input() imgSrcPath;
  @Input() flightNumber;
  aircraftType = '';
  constructor(private dataShareService: DataShareService, private httpService: DataService) { }
  showEnum(): any {
    return this.dataShareService.setFlagSeatValue();
  }
  setAircraftType(): string {
    if ((this.airport.arrivalAirport === 'New York') || (this.airport.arrivalAirport === 'Chicago')) {
      return this.aircraftType = 'B788';
    } else {
      return this.aircraftType = 'B738';
    }
  }
  setAircraftForService(): string {
    return this.httpService.aircraftType = this.aircraftType;
  }
}
