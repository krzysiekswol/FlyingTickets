import {Component} from '@angular/core';
import {Airport} from '../dataModel/airportModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  titleTextFormAirport = 'Start your adventure here';
  minDate: Date = new Date();
  maxDate: Date = new Date (2021, 9, 30);
  flag = false;
  departureAirports: Airport[] = [
    {code: 'WAW', name: 'Warsaw'},
    {code: 'KRK', name: 'Cracow'}
  ];
  arrivalAirports: Airport[] = [
    {code: 'JFK', name: 'New York'},
    {code: 'ORD', name: 'Chicago'}
  ];
  userChoiceOfFlight: {departureAirport: string, arrivalAirport: string, flightStartDate: string} = {
    departureAirport: '',
    arrivalAirport: '',
    flightStartDate: ''
  };
  constructor() { }
  showAvailableFlights(): void {
    this.flag = true;
  }
}
