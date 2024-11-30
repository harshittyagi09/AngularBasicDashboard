import { Injectable } from '@angular/core';
import{ HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IpdcensusService {

  url='http://115.244.82.142/RGReports/api/RamaReport/GetIPDCensus'

  constructor(private http:HttpClient) { }

  Ipdcensus(){
    return this.http.get(this.url);
  }
}
