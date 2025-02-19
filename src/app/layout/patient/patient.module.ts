import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ScheduleAppoinmentComponent } from './schedule-appoinment/schedule-appoinment.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';


@NgModule({
  declarations: [
    PatientComponent,
    PatientDashboardComponent,
    ScheduleAppoinmentComponent,
    AppointmentConfirmationComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule
  ]
})
export class PatientModule { }
