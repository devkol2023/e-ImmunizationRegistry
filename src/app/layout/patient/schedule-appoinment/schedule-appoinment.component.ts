import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-appoinment',
  templateUrl: './schedule-appoinment.component.html',
  styleUrl: './schedule-appoinment.component.scss'
})
export class ScheduleAppoinmentComponent implements OnInit {
  patient: any;
  appoinment: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.patient = JSON.parse(params['patient']);
      this.appoinment = JSON.parse(params['appoinment']);
    });
  }
}
