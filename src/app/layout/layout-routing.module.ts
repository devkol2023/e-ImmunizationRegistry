import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{ path: '', component: LayoutComponent },
{ path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
{ path: 'vaccination', loadChildren: () => import('./vaccination/vaccination.module').then(m => m.VaccinationModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
