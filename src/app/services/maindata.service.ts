import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaindataService {

  constructor(private http :HttpClient) { }
  
  depturl='https://localhost:7245/api/Main/GetDepartmentList'
  specurl='https://localhost:7245/api/Main/GetSpecializationList'
  uniturl='https://localhost:7245/api/Main/GetUnitList'

  DepartmentDropdown():Observable<any>{
    return this.http.get(this.depturl);
  } 
   

  SpecializationDropdown(deptID:number):Observable<any>{
    const headers=new HttpHeaders({dept_id:deptID.toString()});
    return this.http.get(this.specurl,{headers});    
  }

  UnitDropdown(specID:number):Observable<any>{
    const headers=new HttpHeaders({specialization_id:specID.toString()});
    return this.http.get(this.uniturl,{headers});
  }

}
