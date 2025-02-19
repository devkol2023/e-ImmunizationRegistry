import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { ScheduleAppoinmentComponent } from './schedule-appoinment/schedule-appoinment.component';

const routes: Routes = [
  { path: '', component: PatientComponent },
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'schedule-appoinment', component: ScheduleAppoinmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
