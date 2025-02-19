import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-appoinment',
  templateUrl: './schedule-appoinment.component.html',
  styleUrl: './schedule-appoinment.component.scss'
})
export class ScheduleAppoinmentComponent {
  pinCode!: number;
  selectedDistrict!: string;
  selectedAge!: string;
  selectedCost!: string;
  selectedVaccine!: string;
  selectedDate!: string;
  districts = ['Kingston', 'St. Andrew', 'Portmore', 'Montego Bay'];
  ageGroups = ['12-17', '15+', '18+', '45+', '60+'];
  vaccines = ['Covishield', 'Covaxin', 'GEMCOVAC', 'iNCOVACC', 'Sputnik V', 'ZyCoV-D',];
  availableDates = ['Sun, 23 Feb', 'Mon, 24 Feb', 'Tue, 25 Feb', 'Wed, 26 Feb', 'Thu, 27 Feb'];
  // centers = []; // No centers available for now

  searchSlots() {
    alert("Search functionality will be implemented!");
  }

  filterByAge(age: string) {
    this.selectedAge = age;
  }

  filterByCost(cost: string) {
    this.selectedCost = cost;
  }

  filterByVaccine(vaccine: string) {
    this.selectedVaccine = vaccine;
  }

  selectDate(date: string) {
    this.selectedDate = date;
  }

  prevDate() {
    alert("Previous date navigation will be implemented!");
  }

  nextDate() {
    alert("Next date navigation will be implemented!");
  }




  centers = [
    {
      name: 'Kingston Health Center',
      location: 'Kingston, Jamaica',
      vaccine: 'Covishield',
      cost: 'Free',
      age: '18+',
      slots: ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM']
    },
    {
      name: 'Montego Bay Clinic',
      location: 'Montego Bay, Jamaica',
      vaccine: 'Covaxin',
      cost: 'Paid',
      age: '45+',
      slots: ['9:00 AM', '12:00 PM', '3:30 PM']
    }
  ];
}
