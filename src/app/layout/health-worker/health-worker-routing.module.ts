import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthWorkerComponent } from './health-worker.component';
import { HealthWorkerDashboardComponent } from './health-worker-dashboard/health-worker-dashboard.component';

const routes: Routes = [
  { path: '', component: HealthWorkerComponent},
  { path: 'dashboard', component: HealthWorkerDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthWorkerRoutingModule { }
