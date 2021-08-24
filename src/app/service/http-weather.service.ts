import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpWeatherService {
  private urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=`;
  private apiKey = '721ffdb40a8b69a87a4dd5173f2c124d';

  constructor(private httpWeather: HttpClient) { }
  get(city: string): Observable<any> {
    return this.httpWeather.get(`${this.urlWeather}${city}&appid=${this.apiKey}`);
  }
}
