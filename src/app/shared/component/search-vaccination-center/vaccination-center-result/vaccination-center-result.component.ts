import { Component, OnInit } from '@angular/core';

interface VaccinationCenter {
  name: string;
  address: string;
  type: 'GOVT' | 'PRIVATE';
  slots: { date: string; time: string; status: 'Available' | 'NA' }[];
}

@Component({
  selector: 'app-vaccination-center-result',
  templateUrl: './vaccination-center-result.component.html',
  styleUrl: './vaccination-center-result.component.scss'
})
export class VaccinationCenterResultComponent implements OnInit {
  selectedDate: string = '';

  availableDates: string[] = [];

  centers: VaccinationCenter[] = [
    {
      name: 'Kingston Health Center',
      address: '123 Main St, Kingston, Jamaica',
      type: 'GOVT',
      slots: [
        { date: '2025-02-18', time: '09:00 AM - 01:00 PM', status: 'Available' },
        { date: '2025-02-19', time: 'NA', status: 'NA' },
        { date: '2025-02-20', time: 'NA', status: 'NA' },
      ],
    },
    {
      name: 'Portmore Medical Center',
      address: '456 Hope Rd, Portmore, Jamaica',
      type: 'PRIVATE',
      slots: [
        { date: '2025-02-18', time: 'NA', status: 'NA' },
        { date: '2025-02-19', time: '09:00 AM - 03:00 PM', status: 'Available' },
        { date: '2025-02-20', time: 'NA', status: 'NA' },
      ],
    }
  ];

  filteredCenters: VaccinationCenter[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateDateRange();
    this.selectedDate = this.availableDates[0];
    this.filterCenters();
  }

  /**
   * Generates a range of dates for filtering
   */
  generateDateRange(): void {
    const today = new Date();
    this.availableDates = [];
  
    for (let i = 0; i < 10; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      this.availableDates.push(futureDate.toISOString().split('T')[0]); // Format: YYYY-MM-DD
    }
  
    this.selectedDate = this.availableDates[0]; // Set default selected date
  }
  
  /**
   * Moves to the previous date in the available list and dynamically updates the range
   */
  prevDate(): void {
    if (this.availableDates.length === 0) return;
  
    const firstDate = new Date(this.availableDates[0]);
    firstDate.setDate(firstDate.getDate() - 1);
    const newFirstDate = firstDate.toISOString().split('T')[0];
  
    // Insert the new date at the start and remove the last date
    this.availableDates.unshift(newFirstDate);
    this.availableDates.pop();
  
    // this.selectedDate = this.availableDates[0]; // Move to the new first date
    this.filterCenters();
  }
  
  /**
   * Moves to the next date in the available list and dynamically updates the range
   */
  nextDate(): void {
    if (this.availableDates.length === 0) return;
  
    const lastDate = new Date(this.availableDates[this.availableDates.length - 1]);
    lastDate.setDate(lastDate.getDate() + 1);
    const newLastDate = lastDate.toISOString().split('T')[0];
  
    // Add the new date at the end and remove the first date
    this.availableDates.push(newLastDate);
    this.availableDates.shift();
  
    // this.selectedDate = this.availableDates[this.availableDates.length - 1]; // Move to the new last date
    this.filterCenters();
  }  

  /**
   * Selects a specific date for filtering
   */
  selectDate(date: string): void {
    this.selectedDate = date;
    this.filterCenters();
  }

  /**
   * Filters centers based on selected date
   */
  filterCenters(): void {
    this.filteredCenters = this.centers.filter((center) => {
      return center.slots.some(slot => slot.date === this.selectedDate);
    });
  }
}
