import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { LoginComponent } from './login/login.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { PersonRegistrationComponent } from './person-registration/person-registration.component';
import { StaffleaveformComponent } from './staffleaveform/staffleaveform.component';
import { ModulesModule } from './modules/modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpHandlerService } from './shared/service/httphandler.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HodDashboardComponent,
    LoginComponent,
    StaffDashboardComponent,
    PersonRegistrationComponent,
    StaffleaveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModulesModule
  ],
  providers: [HttpHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
