import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UpdateService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get(
      'https://cdn-api.co-vin.in/api/v4/appointment/sessions/public/calendarByDistrict?district_id=265&date=29-01-2022'
    );
  }
}
