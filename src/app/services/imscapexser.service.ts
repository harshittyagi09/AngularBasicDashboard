import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Capexopex } from '../interfaces/capexopex';

@Injectable({
  providedIn: 'root'
})
export class ImscapexserService {

  constructor(private http: HttpClient) { }

  dataurl = 'http://115.244.82.142/RGReports/api/RamaReport/GetDashboardIMSCapexOpexData?loginId=1&dateFrom=30/11/2024&dateTo=30/11/2024'
 
  CapexOpexData():Observable<Capexopex>{
    return this.http.get<Capexopex>(this.dataurl);
  }
}
