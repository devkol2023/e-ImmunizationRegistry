import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthWorkerRoutingModule } from './health-worker-routing.module';
import { HealthWorkerComponent } from './health-worker.component';
import { HealthWorkerDashboardComponent } from './health-worker-dashboard/health-worker-dashboard.component';


@NgModule({
  declarations: [
    HealthWorkerComponent,
    HealthWorkerDashboardComponent
  ],
  imports: [
    CommonModule,
    HealthWorkerRoutingModule
  ]
})
export class HealthWorkerModule { }
