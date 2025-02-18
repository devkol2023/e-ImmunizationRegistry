import { Component } from '@angular/core';

interface VaccinationStep {
  icon: string;
  title: string;
  description: string;
  link: string; // For linking to more information or related actions
}

@Component({
  selector: 'app-vaccination-steps',
  templateUrl: './vaccination-steps.component.html',
  styleUrl: './vaccination-steps.component.scss'
})
export class VaccinationStepsComponent {
  steps: VaccinationStep[] = [
    {
      icon: 'edit',
      title: 'Register/Sign In',
      description: 'Book an online appointment on MOHW Portal or walk in to any vaccination center to get started.',
      link: '/register' // Adjust link as necessary
    },
    {
      icon: 'local_hospital',
      title: 'Visit Your Clinic',
      description: 'Visit the designated health clinic for your vaccination. Ensure to follow all safety protocols.',
      link: '/clinics' // Adjust link as necessary
    },
    {
      icon: 'file_download',
      title: 'Get Your Certificate',
      description: 'Download your vaccination certificate from MOHW Portal and keep it for your records.',
      link: '/download-certificate' // Adjust link as necessary
    }
  ];
}
