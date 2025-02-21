import { Component } from '@angular/core';

@Component({
  selector: 'app-health-worker-dashboard',
  templateUrl: './health-worker-dashboard.component.html',
  styleUrl: './health-worker-dashboard.component.scss'
})
export class HealthWorkerDashboardComponent {
  totalVaccinationsToday = 150;
  newPatientsRegistered = 45;
  vaccineStockAlerts = 5;

  tableColumns = [
    { key: 'appointmentRefNo', label: 'Appointment Ref No', width: '12%' },
    { key: 'patientName', label: 'Patient Name', width: '15%' },
    { key: 'vaccineType', label: 'Vaccine Type', width: '15%' },
    { key: 'clinicLocation', label: 'Clinic Location', width: '15%' },
    { key: 'doseNumber', label: 'Dose Number', width: '10%' },
    { key: 'appointmentDate', label: 'Appointment Date', width: '10%' },
    { key: 'appointmentTime', label: 'Appointment Time', width: '10%' },
    { key: 'status', label: 'Status', width: '10%' }
  ];
  
  upcomingAppointments = [
    {
      patientName: 'John Doe',
      vaccineType: 'Pfizer',
      clinicLocation: 'Kingston Health Center',
      doseNumber: 'Dose 1',
      appointmentDate: '15/03/2024',
      appointmentTime: '10:00 AM',
      status: 'Scheduled',
      appointmentRefNo: 'VA2024-001'
    },
    {
      patientName: 'Jane Smith',
      vaccineType: 'Moderna',
      clinicLocation: 'Arnos Vale Health Center',
      doseNumber: 'Dose 2',
      appointmentDate: '16/03/2024',
      appointmentTime: '11:30 AM',
      status: 'Scheduled',
      appointmentRefNo: 'VA2024-002'
    },
    {
      patientName: 'Michael Brown',
      vaccineType: 'AstraZeneca',
      clinicLocation: 'Georgetown Medical Center',
      doseNumber: 'Booster',
      appointmentDate: '17/03/2024',
      appointmentTime: '02:00 PM',
      status: 'Confirmed',
      appointmentRefNo: 'VA2024-003'
    },
    {
      patientName: 'Sarah Johnson',
      vaccineType: 'J&J',
      clinicLocation: 'Barrouallie Clinic',
      doseNumber: 'Dose 1',
      appointmentDate: '18/03/2024',
      appointmentTime: '09:45 AM',
      status: 'Pending',
      appointmentRefNo: 'VA2024-004'
    },
    {
      patientName: 'Robert Wilson',
      vaccineType: 'Sinopharm',
      clinicLocation: 'Calliaqua Health Center',
      doseNumber: 'Dose 2',
      appointmentDate: '19/03/2024',
      appointmentTime: '01:15 PM',
      status: 'Scheduled',
      appointmentRefNo: 'VA2024-005'
    }
  ];
  
  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.upcomingAppointments.length, // Total number of items
  };


  updateItemsPerPage(itemsPerPage: number): void {
    console.log('Items Per Page Changed:', itemsPerPage);
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1; // Reset to the first page
  }

   // Handle Page Change
   updatePage(page: number): void {
    this.paginationConfig.currentPage = page;
  }
}
