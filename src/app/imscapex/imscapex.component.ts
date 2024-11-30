import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImscapexserService } from '../services/imscapexser.service';

@Component({
  selector: 'app-imscapex',
  imports: [CommonModule],
  templateUrl: './imscapex.component.html',
  styleUrl: './imscapex.component.css'
})
export class ImscapexComponent {

  imsdata:any
 
   constructor(private imsdatacapope:ImscapexserService){
    this.imsdatacapope.CapexOpexData().subscribe({
      next:(response)=>{
        console.log('$$$$',response);
        this.imsdata=response.data;       
      },
      error:(err)=>{
        console.error('Error Fetching Capex Opex Data');
      },
    });
   }


}
