import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  loggedInUser: any;
  activeDropdown: string | null = null;
  isProfileDropdownOpen = false;
  isNotificationOpen: boolean = false;
  notifications: string[] = [
    '💉 Your appointment for "Hepatitis B - Dose 1" is confirmed for tomorrow at 10 AM.',
    '📢 Reminder: Your "Flu Shot - Booster" is scheduled for this Saturday at Kingston Health Center.',
    '✅ Your "COVID-19 - Dose 2" has been successfully completed. Download your certificate now!',
    '🎯 Good news! You are now eligible for the "HPV Vaccine". Book your slot today!',
    '📅 Reminder: Your next vaccine dose is due on 15th March. Don’t forget to schedule it!',
    '🚨 Health Advisory: Due to increased demand, vaccination slots are filling fast. Book early!',
  ];  

  constructor(private router:Router, private authService: AuthService,
    private eRef : ElementRef
  ){}

  ngOnInit(): void {
    this.authService.getUser().subscribe((user:any) => {
      this.loggedInUser = user;
    });
  }

  login(){
    this.router.navigate(['/auth/login'])
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isNotificationOpen = false;
      this.isProfileDropdownOpen = false;
    }
  }

  homeClicked(): void {
    if(!this.loggedInUser) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/layout/patient/dashboard']);
    }
  }

  toggleDropdown(menu: string): void {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }

  onLogout() {
    this.authService.logout();
    this.isNotificationOpen = false;
    this.isProfileDropdownOpen = false;
    this.router.navigate(['/home']);
  }

  toggleNotificationPanel(): void {
    this.isNotificationOpen = !this.isNotificationOpen;
    this.isProfileDropdownOpen = false;
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    this.isNotificationOpen = false;
  }

  goToViewAll() {
  }

  markAsRead(notification: string): void  {
    this.notifications = this.notifications.filter((el: string) => el !== notification);
  }

  updateProfile(): void {
    // this.router.navigate(['/candidate/profile']);
    this.isNotificationOpen = false;
    this.isProfileDropdownOpen = false;
  }

  changePassword(): void {
    this.isNotificationOpen = false;
    this.isProfileDropdownOpen = false;
    this.router.navigate(['/auth/change-password']);
  }
}
