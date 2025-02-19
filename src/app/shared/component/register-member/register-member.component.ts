import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrl: './register-member.component.scss'
})
export class RegisterMemberComponent {
  @Output() cancel:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() memberRegistered: EventEmitter<boolean> = new EventEmitter<boolean>();

  registrationForm!: FormGroup;
  loggedInUser: any;

  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      yearOfBirth: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      photoIdProof: ['', Validators.required],
      photoIdNumber: ['', Validators.required]
    });

    this.authService.getUser().subscribe((user:any) => {
      this.loggedInUser = user;
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      if (this.loggedInUser) {
        this.memberRegistered.emit(true);
      } else {
        this.authService.login(this.registrationForm.value);
        this.router.navigate(['/layout/patient/dashboard']);
      }
    }
  }
  onCancel(){
    this.cancel.emit(true);
  }
}
