import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss'
})
export class PatientDashboardComponent {
  patients = [
    {
      name: 'Javon Campbell',
      refId: 'JM202415678902',
      secretCode: '8765',
      photoId: 'National ID',
      idNumber: 'XXXXXXXX8765',
      birthYear: 1992,
      dose: 'DOSE 1'
    },
    {
      name: 'Shanice Thompson',
      refId: 'JM202415123456',
      secretCode: '4321',
      photoId: 'Driver’s License',
      idNumber: 'XXXXXXXX4321',
      birthYear: 1995,
      dose: 'DOSE 1'
    }
  ];

  editPatient(patient: any) {
    alert(`Editing details for ${patient.name}`);
  }

  deletePatient(patient: any) {
    const confirmation = confirm(`Are you sure you want to delete ${patient.name}?`);
    if (confirmation) {
      this.patients = this.patients.filter(p => p !== patient);
    }
  }
}
