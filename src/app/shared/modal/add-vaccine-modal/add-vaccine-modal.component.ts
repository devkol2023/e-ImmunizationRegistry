import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-vaccine-modal',
  templateUrl: './add-vaccine-modal.component.html',
  styleUrl: './add-vaccine-modal.component.scss'
})
export class AddVaccineModalComponent implements OnInit {
  vaccineForm!: FormGroup;
  isEditing = false;

  constructor(
    public dialogRef: MatDialogRef<AddVaccineModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.vaccineForm = this.fb.group({
      name: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(1)]],
      expiry: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.vaccineForm.valid) {
      const value = this.vaccineForm.value;
      value.expiry = this.datePipe.transform(value.expiry, 'yyyy-MM-dd');
      this.dialogRef.close(value);
    } else {
      this.vaccineForm.markAllAsTouched();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
