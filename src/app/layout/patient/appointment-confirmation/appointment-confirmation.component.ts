import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.component.html',
  styleUrl: './appointment-confirmation.component.scss'
})
export class AppointmentConfirmationComponent {
  selectedCenter: string = '';
  selectedDate: string = '';
  selectedTime: string = '';

  userName: string = '';
  userId: string = '';
  userPhone: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Retrieve parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.selectedCenter = params['center'];
      this.selectedDate = params['date'];
      this.selectedTime = params['time'];
    });
  }

  confirmBooking(): void {
    if (!this.userName || !this.userId || !this.userPhone) {
      alert("Please fill in all required fields!");
      return;
    }

    alert(`Appointment confirmed at ${this.selectedCenter} on ${this.selectedDate} at ${this.selectedTime}`);
    this.router.navigate(['/layout/patient/dashboard']); // Redirect after confirmation
  }

  cancelBooking(): void {
    this.router.navigate(['/layout/patient/schedule-appoinment']); // Redirect back to booking page
  }
}
