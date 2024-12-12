import { Component } from '@angular/core';
import { DoctorserService } from '../services/doctorser.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

  constructor(private doctorser: DoctorserService) { }

  DepartmentData: any[] = [];
  SpecializationData: any[] = [];
  UnitData: any[] = [];
  CategoryData: any[] = [];
  PartnerData: any[] = [];
  DoctorData: any[] = [];

  selectedDept: number | null = null;
  selectedSpec: number | null = null;
  selectedUnit: number | null = null;
  selectedcate: string = "";
  isapplyemergencycharge:string="";

  ngOnInit(): void {
    this.loadDepartmentDropdown();
    this.loadPatientCategories();
  }


  loadPatientCategories(): void {
    this.doctorser.PatientCatDropdown().subscribe({
      next: (data) => {
        this.CategoryData = data;
      },
      error: (err) => {
        console.error('Error Fetching Data', err);
      },
    });
  }


  loadDepartmentDropdown(): void {
    this.doctorser.DepartmentDropdown().subscribe({
      next: (data => {
        this.DepartmentData = data;
      }),
      error: (err) => {
        console.error('Error Fetching Data', err);
      },
    });
  }

  OnDepartmentDropDownChange(): void {
    if (this.selectedDept) {
      this.doctorser.SpecializationDropdown(this.selectedDept).subscribe({
        next: (data) => {
          this.SpecializationData = data;
          this.UnitData = [];
          this.selectedSpec = null;
          this.selectedUnit = null;
        },
        error: (err) => {
          console.error('Error Fetching Data', err);
        },
      });
    }
  }

  OnSpecializationChange(): void {
    if (this.selectedSpec) {
      this.doctorser.UnitDropdown(this.selectedSpec).subscribe({
        next: (data) => {
          this.UnitData = data;
          this.selectedUnit = null;
        },
        error: (err) => {
          console.error('Error Fetching Data', err);
        },
      });
    }
  }

  OnPatientCatChange(): void {
    if (this.selectedcate) {
      this.doctorser.PartnerDropdown(this.selectedcate).subscribe({
        next: (data) => {
          this.PartnerData = data;
        },
        error: (err) => {
          console.error('Error Fetching Data', err);
        },
      });
    }
  }
 
OncheckBoxChange(value:string):void{ 
  this.isapplyemergencycharge=value;
}

  getDoctorsData(): void {
    if (this.selectedDept && this.selectedSpec && this.selectedUnit) {      
      this.doctorser.DoctorsDropdown(this.selectedDept, this.selectedSpec, this.selectedUnit,this.isapplyemergencycharge).subscribe({
        next: (data) => {
          this.DoctorData = data;
        },
        error: (err) => {
          console.error('Error Fetching Data', err);
        },
      });
    }
    else {
      console.warn('Please Select Department,Specialzation, Unit to get the Doctors');
    }
  }


}
