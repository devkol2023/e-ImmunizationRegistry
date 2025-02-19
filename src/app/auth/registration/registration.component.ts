import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registerMemberPage:boolean = false;
  constructor() {}

  registerMember() {
    // Implement registration logic here or navigate to a different route
    this.registerMemberPage = true
    console.log('Navigate to registration form');
  }

  backButton(event:boolean){
    this.registerMemberPage = event;
    console.log(this.registerMemberPage);
    
  }
}
