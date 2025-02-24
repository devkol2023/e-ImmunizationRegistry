import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinationsRoutingModule } from './vaccinations-routing.module';
import { VaccinationComponent } from './vaccination.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    VaccinationComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    VaccinationsRoutingModule,
    SharedModule
  ]
})
export class VaccinationsModule { }
