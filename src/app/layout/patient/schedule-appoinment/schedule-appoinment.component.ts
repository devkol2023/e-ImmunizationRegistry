import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-appoinment',
  templateUrl: './schedule-appoinment.component.html',
  styleUrl: './schedule-appoinment.component.scss'
})
export class ScheduleAppoinmentComponent {
  constructor(private router: Router) { }
}
