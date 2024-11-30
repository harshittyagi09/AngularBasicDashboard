import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyserviceService } from '../services/pharmacyservice.service';

@Component({
  selector: 'app-pharmacy-data',
  imports: [CommonModule],
  templateUrl: './pharmacy-data.component.html',
  styleUrl: './pharmacy-data.component.css'
})
export class PharmacyDataComponent {

  pharmacyData:any;
  isloading=true;

  constructor(private pharma:PharmacyserviceService){
    this.pharma.PharmacyData().subscribe({
      next:(data)=>{
        this.pharmacyData=data;
        this.isloading=false;
      },
      error:(err)=>{
        console.error('Error Fetching Pharma Data');
        this.isloading=false;
      },
    });
  }

}
