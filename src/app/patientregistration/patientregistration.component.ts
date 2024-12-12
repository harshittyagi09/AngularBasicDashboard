import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientregService } from '../services/patientreg.service';

@Component({
  selector: 'app-patientregistration',
  imports: [CommonModule,FormsModule],
  templateUrl: './patientregistration.component.html',
  styleUrl: './patientregistration.component.css'
})
export class PatientregistrationComponent {

  patientdata={
    first_name:"",
    last_name:"",
    gender:"",
    age :null,
    phone_no:"",
    father_spouse_name:"",
    address:"",
    state_id:null,
    AdharNo:"",
    Password:""
  };

  responseMessage:string='';
  
  constructor(private regservice:PatientregService){}

  registerpatient():void{
    this.regservice.registerPatient(this.patientdata).subscribe({
      next:(data)=>{
        if( data && data.message){
          this.responseMessage=`Registration Sucessful ! Patient ID : ${data.message}`;
        }
        else{
          this.responseMessage = 'Registration successful, but no Patient ID returned.';
        }
      },
      error:(err)=>{
        this.responseMessage='Registration Failed';
      },
    });
  }

}
