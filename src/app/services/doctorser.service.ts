import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserService {

  constructor(private http:HttpClient) { }

  depturl='https://localhost:7245/api/Main/GetDepartmentList'
  specurl='https://localhost:7245/api/Main/GetSpecializationList'
  uniturl='https://localhost:7245/api/Main/GetUnitList'
  patientcaturl='https://localhost:7245/api/Main/PatientCategories'
  partnerurl='https://localhost:7245/api/Main/GetPartners'
  doctorurl='https://localhost:7245/api/Main/GetDoctorsAvailableForOPD'

  DepartmentDropdown():Observable<any>{
    return this.http.get(this.depturl);
  }

  SpecializationDropdown(deptID:number):Observable<any>{
    const headers= new HttpHeaders({dept_id:deptID.toString()});
    return this.http.get(this.specurl,{headers});
  }

  UnitDropdown(specID:number):Observable<any>{
    const headers=new HttpHeaders({specialization_id:specID.toString()});
    return this.http.get(this.uniturl,{headers});
  }

  PatientCatDropdown():Observable<any>{
    return this.http.get(this.patientcaturl);
  }

  PartnerDropdown(category:string):Observable<any>{
    return this.http.get(this.partnerurl,{params:{PartnerType:category}});
  }

  DoctorsDropdown(deptID:number,specID:number,unitID:number,isapplyemergencycharge:string):Observable<any>{
    const params={
      DoctorID :0,
      CampId:0,
      IsApplyEmergencyCharge:isapplyemergencycharge,
      partnerId:0,
      OPDDiscountID:0,
      DeptID:deptID.toString(),
      SpecID:specID.toString(),
      UnitId:unitID.toString(),
      PatientCategoryId:1 
    }
    return this.http.get(this.doctorurl,{params});
  }

  
}
