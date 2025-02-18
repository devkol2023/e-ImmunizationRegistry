import { Component } from '@angular/core';

@Component({
  selector: 'app-top-statistics-banner',
  templateUrl: './top-statistics-banner.component.html',
  styleUrl: './top-statistics-banner.component.scss'
})
export class TopStatisticsBannerComponent {
  totalServices: number = 320; // Example data
  newPatientsToday: number = 150; // Example data
}
