import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { SearchVaccinationCenterComponent } from './component/search-vaccination-center/search-vaccination-center.component';
import { VaccinationCenterResultComponent } from './component/search-vaccination-center/vaccination-center-result/vaccination-center-result.component';
import { FaqSectionComponent } from './component/faq-section/faq-section.component';
import { RegisterMemberComponent } from './component/register-member/register-member.component';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddVaccineModalComponent } from './modal/add-vaccine-modal/add-vaccine-modal.component';



@NgModule({
  declarations: [
    SearchVaccinationCenterComponent,
    VaccinationCenterResultComponent,
    FaqSectionComponent,
    RegisterMemberComponent,
    TableComponent,
    AddVaccineModalComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxPaginationModule
  ],
  exports: [AngularMaterialModule, SearchVaccinationCenterComponent, VaccinationCenterResultComponent,
    FaqSectionComponent,RegisterMemberComponent, TableComponent, NgxPaginationModule,
    AddVaccineModalComponent
  ]
})
export class SharedModule { }
