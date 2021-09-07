import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {
  public aircraftType = '';
  private url = 'https://flightcarrier.free.beeceptor.com/flightcarrier';
  private urlSeat = 'https://flightcarrier.free.beeceptor.com/airplane';
  constructor(private http: HttpClient) {}
  get(): Observable<any> {
    return this.http.get(this.url);
  }
  getSeats(): Observable<any> {
    return this.http.get(this.urlSeat,
      {params: new HttpParams().set('plane', this.aircraftType)});
  }
}
