import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
  { path: 'health-worker', loadChildren: () => import('./health-worker/health-worker.module').then(m => m.HealthWorkerModule) },
  { path: 'calender', loadChildren: () => import('./calender/calender.module').then(m => m.CalenderModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
