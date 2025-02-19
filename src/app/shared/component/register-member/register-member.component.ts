import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrl: './register-member.component.scss'
})
export class RegisterMemberComponent {
  registrationForm!: FormGroup;
@Output() cancel:EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      yearOfBirth: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      photoIdProof: ['', Validators.required],
      photoIdNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.router.navigate(['/layout/patient/dashboard']);
    }
  }
  onCancel(){
    // this.location.back()
    this.cancel.emit(false);
  }
}
