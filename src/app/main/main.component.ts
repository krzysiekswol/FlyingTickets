import {Component, OnInit} from '@angular/core';
import {Airport} from '../dataModel/airportModel';
import {UserChoiceOfFlight} from '../dataModel/UserChoiceOfFlight';
import {HttpWeatherService} from '../service/http-weather.service';
import {DataService} from '../service/data.service';
import {DataAirportsService} from '../service/data-airports.service';
import {DataShareService} from '../service/data-share.service';





@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  titleTextFormAirport = 'Start your adventure here';
  minDate: Date = new Date();
  maxDate: Date = new Date (2021, 9, 30);
  flag = false;
  carrier = '';
  tempCity = {
    minTemp: '',
    maxTemp: '',
    wxDescription: '',
    iconCode: ''
  };
  imgSrcPath = '';
  departureAirports: Airport[] = [
    {code: 'WAW', name: 'Warsaw'},
    {code: 'KRK', name: 'Krakow'}
  ];
  arrivalAirports: Airport[] = [];
  userChoiceOfFlight: UserChoiceOfFlight = {
    departureAirport: '',
    arrivalAirport: '',
    flightStartDate: ''
  };
  flightNumber = '';
  constructor(
    private httpWeather: HttpWeatherService,
    private httpCarrier: DataService,
    private httpAirports: DataAirportsService,
    private dataShareService: DataShareService) { }
  showAvailableFlights(): boolean {
    return this.flag = true;
  }
  getAllValues(): boolean {
    if (this.userChoiceOfFlight.departureAirport && this.userChoiceOfFlight.arrivalAirport && this.userChoiceOfFlight.flightStartDate) {
      return true;
    }
  }
  getWeather(): any {
   return this.httpWeather.get(this.userChoiceOfFlight.arrivalAirport)
     .subscribe(data => {
       this.tempCity = {
         minTemp: `${Number(data.main.temp_min - 273.15).toFixed(0)}`,
         maxTemp: `${Number(data.main.temp_max - 273.15).toFixed(0)}`,
         wxDescription: data.weather[0].description,
         iconCode: data.weather[0].icon
       };
       this.imgSrcPath = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
     });
  }
  getCarrier(): any {
    return this.httpCarrier.get().subscribe(data => {
      // tslint:disable-next-line:forin
      const {Carrier: carrier, FlightNumber: flightnumber} = data;
      this.carrier = carrier;
      this.flightNumber = flightnumber;
      }
    );
  }
  getArrivalAirports(): any {
    return this.httpAirports.get().subscribe(data => {
      data.airports.forEach(item => {
          this.arrivalAirports.push(item);
      });
    });
  }
  resetValue(): any {
      const confirmation = confirm('Are you sure?');
      if (confirmation) {
        this.userChoiceOfFlight.departureAirport = '';
        this.userChoiceOfFlight.arrivalAirport = '';
        this.userChoiceOfFlight.flightStartDate = '';
        this.flag = false;
      }
  }
  ngOnInit(): void {
    this.getArrivalAirports();
  }
}


