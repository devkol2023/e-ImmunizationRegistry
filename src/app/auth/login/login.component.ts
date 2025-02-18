import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {

   }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }




  getOTP() {
    if (this.loginForm.valid) {
      this.router.navigate(['/auth/registration']);
      console.log('Sending OTP to:', this.loginForm.value.mobileNumber);
    } else {
      console.log('Form is not valid');
    }
  }
}