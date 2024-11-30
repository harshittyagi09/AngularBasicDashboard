import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadiopathserviceService } from '../services/radiopathservice.service';

@Component({
  selector: 'app-radiopathsummar',
  imports: [CommonModule],
  templateUrl: './radiopathsummar.component.html',
  styleUrl: './radiopathsummar.component.css'
})
export class RadiopathsummarComponent {

  radiopathdata:any;
  isloading=true;

  constructor(private radiopath: RadiopathserviceService){
    this.radiopath.RadioPathData().subscribe({
      next:(data: any)=>{
        console.log('>>>>>',data);
        this.radiopathdata=data as any[];
        this.isloading=false;
      },
      error:(err: any)=>{
        console.error('Error Fetching Data',err);
        this.isloading=false;
      },
    });
  }
  }
    