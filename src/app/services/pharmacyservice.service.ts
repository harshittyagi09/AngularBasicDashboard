import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PharmacyserviceService {

  pharmacyurl='http://115.244.82.142/RGReports/api/RamaReport/GetPharmacyItemAnalysis'

  constructor(private http:HttpClient) { }

  PharmacyData(){
    return this.http.get(this.pharmacyurl);
  }
}
