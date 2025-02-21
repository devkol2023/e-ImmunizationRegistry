import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthWorkerComponent } from './health-worker.component';

const routes: Routes = [
  { path: '', component: HealthWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthWorkerRoutingModule { }
