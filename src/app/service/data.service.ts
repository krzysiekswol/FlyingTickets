import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://flightcarrier.free.beeceptor.com/flightcarrier';
  constructor(private http: HttpClient) {}
  get(): Observable<any> {
    return this.http.get(this.url);
  }
  getMessage(msg: string): void {
    console.log(msg);
  }
}
