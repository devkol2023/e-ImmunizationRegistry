import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthWorkerComponent } from './health-worker.component';
import { HealthWorkerDashboardComponent } from './health-worker-dashboard/health-worker-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HealthWorkerDashboardComponent },
  { path: 'vaccination', loadChildren: () => import('./vaccinations/vaccinations.module').then(m => m.VaccinationsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthWorkerRoutingModule { }
