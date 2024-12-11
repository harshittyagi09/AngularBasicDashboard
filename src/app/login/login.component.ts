import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;
  errormsg:string='';

  constructor(private fb:FormBuilder, private http:HttpClient,private router:Router){
    this.loginForm=this.fb.group({
      loginname:['',Validators.required],
      password:['',Validators.required],
    });
  }

  onSubmit():void{
    if (this.loginForm.valid){
      const loginData=this.loginForm.value;


      this.http.post('http://192.168.1.144:8084/api/User/Userlogin',loginData).subscribe(
        (response:any)=>{
          console.log('login sucessful',response);
          localStorage.setItem('token',response.token);
          this.router.navigate(['/dropdowns']);
        },
        (error)=>{
          console.error('Error while login',error);
          this.errormsg= 'Invalid login Credentials,Please try again';
        }
      );    
    }
  }
}
