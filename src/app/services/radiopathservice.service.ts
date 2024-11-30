import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadiopathserviceService {

  constructor(private http:HttpClient) { }

   dataurl ='http://115.244.82.142/RGReports/api/RamaReport/GetRadiologyAndPathologySummaryForDashboard?loginId=1&dateFrom=30/11/2024&dateTo=30/11/2024'
  
  RadioPathData(){
   return this.http.get(this.dataurl);
  }

}
