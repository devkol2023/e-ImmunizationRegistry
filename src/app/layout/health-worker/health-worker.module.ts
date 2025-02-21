import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthWorkerRoutingModule } from './health-worker-routing.module';
import { HealthWorkerComponent } from './health-worker.component';
import { HealthWorkerDashboardComponent } from './health-worker-dashboard/health-worker-dashboard.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HealthWorkerComponent,
    HealthWorkerDashboardComponent
  ],
  imports: [
    CommonModule,
    HealthWorkerRoutingModule,
    SharedModule
  ]
})
export class HealthWorkerModule { }
