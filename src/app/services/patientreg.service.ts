import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientregService {

  regurl='http://192.168.1.144:8081/api/HospitalApp/PatientRegistrationApp'

  constructor(private http:HttpClient) {}

  registerPatient(payload:any):Observable<any>{
    console.log("payload",payload);
    return this.http.post(this.regurl,payload);
  }   
}
