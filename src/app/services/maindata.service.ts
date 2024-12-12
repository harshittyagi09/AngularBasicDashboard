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
  docurl ='https://localhost:7245/api/Main/GetDoctorsAvailableForOPD'
  patientcaturl='https://localhost:7245/api/Main/PatientCategories'
  partnerurl='https://localhost:7245/api/Main/GetPartnerList'

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

  PatientCategoryDropdown():Observable<any>{
    return this.http.get(this.patientcaturl);
  }

  PartnerDropdown(partnertype:string):Observable<any>{
    const headers=new HttpHeaders({partner_type:partnertype.toString()});
    return this.http.get(this.partnerurl,{headers});
  }
  


  GetAvailableDoctors(deptID:number,specID :number ,unitID:number):Observable<any>{
    const params={
      DoctorID :0,
      CampId:0,
      IsApplyEmergencyCharge:'N',
      partnerId:0,
      OPDDiscountID:0,
      DeptID:deptID.toString(),
      SpecID:specID.toString(),
      UnitId:unitID.toString(),
      PatientCategoryId:1 
    };
    return this.http.get(this.docurl,{params});
  }

}
