import { Routes } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { ImscapexComponent } from './imscapex/imscapex.component';
import { IPDCensusComponent } from './ipdcensus/ipdcensus.component';
import { PharmacyDataComponent } from './pharmacy-data/pharmacy-data.component';
import { RadiopathsummarComponent } from './radiopathsummar/radiopathsummar.component';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';
import { DoctorsComponent } from './doctors/doctors.component';

export const routes: Routes = [
    {path:'patientregistration',component:PatientregistrationComponent},
    {path:'doctors',component:DoctorsComponent},
    {path:'dropdowns', component:DropdownComponent},
    {path:'ipdcensus',component:IPDCensusComponent},
    {path:'pharma',component:PharmacyDataComponent},
    {path:'radiopath',component:RadiopathsummarComponent},
    {path:'imscapex',component:ImscapexComponent},
    {path:'login',component:LoginComponent},
    {path:'**',redirectTo:'login'}
];
