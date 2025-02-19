import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrl: './register-member.component.scss'
})
export class RegisterMemberComponent {
  registrationForm!: FormGroup;
@Output() cancel:EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(private fb: FormBuilder,private location:Location) { }

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
      console.log(this.registrationForm.value);
      // handle form submission, e.g., send data to backend
    }
  }
  onCancel(){
    // this.location.back()
    this.cancel.emit(false);
  }
}
