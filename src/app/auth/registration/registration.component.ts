import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor() {}

  registerMember() {
    // Implement registration logic here or navigate to a different route
    console.log('Navigate to registration form');
  }
}
