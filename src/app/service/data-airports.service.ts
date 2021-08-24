import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataAirportsService {
  urlAirports = 'https://flightcarrier.free.beeceptor.com/airports';

  constructor(private http: HttpClient) { }
  get(): Observable<any>{
    return this.http.get(this.urlAirports);
  }
}
