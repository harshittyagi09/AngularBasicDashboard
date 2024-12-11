import { Component, OnInit } from '@angular/core';
import { MaindataService } from '../services/maindata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  standalone: true
})
export class DropdownComponent {

  DepartmentData: any[] = [];
  SpecializationData: any[] = [];
  UnitData: any[] = [];
  DoctorsData: any[]=[];

  selectedDept: number | null = null;
  selectedSpec: number | null = null;
  selectedUnit: number | null = null;

  constructor(private mainservice: MaindataService) { }

  ngOnInit(): void {
    this.loadDepartment();
  }
  loadDepartment(): void {
    this.mainservice.DepartmentDropdown().subscribe({
      next: (data) => {
        this.DepartmentData = data;
      },
      error: (err) => {
        console.error('Error Fetching Department', err);
      },
    });
  }

  onDepartmentChange(): void {
    if (this.selectedDept) {
      this.mainservice.SpecializationDropdown(this.selectedDept).subscribe({
        next: (data) => {
          this.SpecializationData = data;
          this.UnitData = [];
          this.selectedSpec=null;
          this.selectedUnit=null;
        },
        error: (err) => {
          console.error('Error Fetching Specialzation', err);
        },
      });
    }
  }

  OnSpecializationChange(): void {
    if (this.selectedSpec) {
      this.mainservice.UnitDropdown(this.selectedSpec).subscribe({
        next: (data) => {
          this.UnitData = data;
          this.selectedUnit=null;
        },
        error: (err) => {
          console.error('Error Fetching Units', err);
        },
      });
    }
  }

  getDoctors(): void {
    console.log('>>>>',this.selectedDept,'%%%%',this.selectedSpec,'@@@',this.selectedUnit)
    if (this.selectedDept && this.selectedSpec && this.selectedUnit) {
      this.mainservice.GetAvailableDoctors(this.selectedDept, this.selectedSpec, this.selectedUnit).subscribe({
        next: (data) => {
          console.log('Available Doctors', data);
          this.DoctorsData=data;
        },
        error: (err) => {
          console.error('Error Fetching Doctors', err);
        },
      });
    }
    else {
      console.warn('Please Select Department,Specialization and Unit');
    }
  }

}
