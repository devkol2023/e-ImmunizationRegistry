import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { SearchVaccinationCenterComponent } from './component/search-vaccination-center/search-vaccination-center.component';
import { VaccinationCenterResultComponent } from './component/search-vaccination-center/vaccination-center-result/vaccination-center-result.component';
import { FaqSectionComponent } from './component/faq-section/faq-section.component';




@NgModule({
  declarations: [
    SearchVaccinationCenterComponent,
    VaccinationCenterResultComponent,
    FaqSectionComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [AngularMaterialModule, SearchVaccinationCenterComponent, VaccinationCenterResultComponent,
    FaqSectionComponent
  ]
})
export class SharedModule { }
