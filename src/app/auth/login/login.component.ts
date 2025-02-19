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
  otpRequested = false;
  // otpDigits = [1, 2, 3, 4]; // Assuming OTP has 4 digits
  otpBoxes = Array(6).fill(null);
  otpValues: string[] = Array(6).fill('');


  constructor(private fb: FormBuilder,private router: Router) {

   }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required]],
      otp: [{value: '', disabled: true}, [Validators.required, Validators.minLength(6)]]
    });
  }


  getOTP() {
    if (this.loginForm.valid) {
      this.otpRequested = true;
    this.loginForm.get('otp')?.enable();
      console.log('Sending OTP to:', this.loginForm.value.mobileNumber);
    } else {
      console.log('Form is not valid');
    }
  }

  onOtpInput(event: any, index: number) {
    const input = event.target;
    const value = input.value;
    if (!/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    this.otpValues[index] = value;
    if (index < 5 && value) {
      const nextInput = input.nextElementSibling;
      if (nextInput) nextInput.focus();
    }
  }

  onOtpBackspace(event: any, index: number) {
    const input = event.target;
    if (event.key === 'Backspace' && index > 0 && !input.value) {
      const prevInput = input.previousElementSibling;
      if (prevInput) prevInput.focus();
    }
  }

  onOtpSubmit(){
      this.router.navigate(['/auth/registration']);

  }
}