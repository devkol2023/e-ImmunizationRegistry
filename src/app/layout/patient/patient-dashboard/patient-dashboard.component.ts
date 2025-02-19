import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Appointment {
  dose: string;
  vaccine: string;
  location: string;
  date: string;
  status: 'Completed' | 'Scheduled' | 'Pending';
}

interface Patient {
  name: string;
  refId: string;
  secretCode: string;
  photoId: string;
  idNumber: string;
  birthYear: number;
  appointments: Appointment[];
}

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss'
})
export class PatientDashboardComponent {
  patients: Patient[] = [
    {
      name: 'Dwayne Johnson',
      refId: 'JM202412349',
      secretCode: '8765',
      photoId: 'National ID',
      idNumber: 'XXXXX8765',
      birthYear: 1985,
      appointments: [
        { dose: 'DOSE 1', vaccine: 'Hepatitis B', location: 'Kingston Health Center', date: '10 Jan 2022', status: 'Completed' },
        { dose: 'DOSE 2', vaccine: 'Hepatitis B', location: 'Kingston Health Center', date: '12 Mar 2022', status: 'Completed' },
        { dose: 'BOOSTER', vaccine: 'Hepatitis B', location: 'Kingston Health Center', date: '20 Sep 2023', status: 'Scheduled' }
      ]
    },
    {
      name: 'Shanice Thompson',
      refId: 'JM202498721',
      secretCode: '4321',
      photoId: 'Driver’s License',
      idNumber: 'XXXXXX4321',
      birthYear: 1990,
      appointments: [
        { dose: 'DOSE 1', vaccine: 'Flu Shot', location: 'Montego Bay Clinic', date: '15 Feb 2023', status: 'Completed' },
        { dose: 'DOSE 2', vaccine: 'Flu Shot', location: 'Montego Bay Clinic', date: '20 Apr 2023', status: 'Completed' },
        { dose: 'BOOSTER', vaccine: 'Flu Shot', location: 'Montego Bay Clinic', date: 'Upcoming', status: 'Pending' }
      ]
    }
  ];

  constructor(private router: Router) { }

  downloadCertificate(dose: string, vaccine: string, name: string): void {
    alert(`Downloading certificate for ${dose} - ${vaccine} for ${name}`);
  }
  editPatient(patient: any) {
    alert(`Editing details for ${patient.name}`);
  }

  deletePatient(patient: any) {
    const confirmation = confirm(`Are you sure you want to delete ${patient.name}?`);
    if (confirmation) {
      this.patients = this.patients.filter(p => p !== patient);
    }
  }

  schedule(patient: Patient, appointment: Appointment): void {
    this.router.navigate(['/layout/patient/schedule-appoinment'])
  }
}
