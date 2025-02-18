import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopStatisticsBannerComponent } from './top-statistics-banner/top-statistics-banner.component';
import { VaccinationStepsComponent } from './vaccination-steps/vaccination-steps.component';
import { SharedModule } from '../shared/shared.module';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopStatisticsBannerComponent,
    VaccinationStepsComponent,
    ImageCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
