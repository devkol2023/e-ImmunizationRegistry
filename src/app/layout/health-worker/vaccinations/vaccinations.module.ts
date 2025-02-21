import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinationsRoutingModule } from './vaccinations-routing.module';
import { VaccinationComponent } from './vaccination.component';


@NgModule({
  declarations: [
    VaccinationComponent
  ],
  imports: [
    CommonModule,
    VaccinationsRoutingModule
  ]
})
export class VaccinationsModule { }
