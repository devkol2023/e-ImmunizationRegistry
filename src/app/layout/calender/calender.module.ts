import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { SharedModule } from '../../shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    FullCalendarModule,
    SharedModule
  ]
})
export class CalenderModule { }
