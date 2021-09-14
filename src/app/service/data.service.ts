import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {objectKeys} from 'codelyzer/util/objectKeys';





@Injectable({
  providedIn: 'root'
})
export class DataService {
  public aircraftType = '';
  private url = 'https://flightcarrier.free.beeceptor.com/flightcarrier';
  private urlSeat = 'https://flightcarrier.free.beeceptor.com/airplane';
  private urlReservation = 'https://flightcarrier.proxy.beeceptor.com/reservation';
  dataSend: {};
  private json: Object;
  constructor(private http: HttpClient) {}
  get(): Observable<any> {
    return this.http.get(this.url);
  }
  getSeats(): Observable<any> {
    return this.http.get(this.urlSeat,
      {params: new HttpParams().set('plane', this.aircraftType)});
  }
  post(): any {
    this.http.post(this.urlReservation, this.dataSend ).subscribe(data => alert(Object.values(data)));
  }
}
