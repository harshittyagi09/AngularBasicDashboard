import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpdcensusService } from '../services/ipdcensus.service';


@Component({
  selector: 'app-ipdcensus',
  imports: [CommonModule],
  templateUrl: './ipdcensus.component.html',
  styleUrl: './ipdcensus.component.css'
})
export class IPDCensusComponent {

  census:any 
  
  constructor(private censusdata:IpdcensusService){
    this.censusdata.Ipdcensus().subscribe({
      next:(data)=>{
        this.census=data;
      },
      error:(err)=>{
        console.error('Error Fetching Data',err);
      },
    });
  }

}
