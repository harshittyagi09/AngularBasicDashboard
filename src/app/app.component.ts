import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPDCensusComponent } from "./ipdcensus/ipdcensus.component";
import { PharmacyDataComponent } from "./pharmacy-data/pharmacy-data.component";
import { RadiopathsummarComponent } from "./radiopathsummar/radiopathsummar.component";
import { ImscapexComponent } from "./imscapex/imscapex.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IPDCensusComponent, PharmacyDataComponent, RadiopathsummarComponent, ImscapexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstAng';
}
