import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StaffleaveformComponent } from './staffleaveform/staffleaveform.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { PersonRegistrationComponent } from './person-registration/person-registration.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'personregistration', component : PersonRegistrationComponent},
  {path : 'hoddashbord',component : HodDashboardComponent},
  {path : 'staffdasdhbord', component : StaffDashboardComponent},
  {path : 'staffleaveform', component : StaffleaveformComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
