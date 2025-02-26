import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.component.html',
  styleUrl: './add-vaccine.component.scss'
})
export class AddVaccineComponent {
  vaccineForm: FormGroup;
  hospitals = ['Hospital A', 'Hospital B', 'Hospital C'];
  vaccines = ['Pfizer', 'Moderna', 'AstraZeneca', 'J&J'];
  schedule: any[] = [];
  timeSlots: any[] = ['8-10 AM', '10-12 AM', '2-4 PM', '4-6 PM'];
  dateRange: string[] = [];
  paginationConfig = { id: 'vaccinePagination', itemsPerPage: 5, currentPage: 1 };
  showCalendar = false;
  selectedDate: string = '';
  currentMonth: number;
  currentYear: number;
  daysInMonth: number[] = [];
  pageSizes: number[] = [5, 10, 20, 50];
  totalItems: number = 0;
  firstItemIndex: number = 0;
  lastItemIndex: number = 0;

  constructor(private fb: FormBuilder) {
    this.vaccineForm = this.fb.group({
      hospital: ['', Validators.required],
      vaccine: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.generateCalendar();
  }

  addSchedule() {
    const { startDate, endDate } = this.vaccineForm.value;
    if (!this.isValidDate(startDate) || !this.isValidDate(endDate)) {
      console.error('Invalid start or end date');
      return;
    }
    this.generateDateRange(startDate, endDate);
    this.schedule = this.dateRange.map(date => ({ date, slots: this.createSlotData() }));
    this.updatePaginationInfo();
  }

  isValidDate(date: string): boolean {
    return !isNaN(Date.parse(date));
  }

  generateDateRange(start: string, end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    this.dateRange = [];
    while (startDate <= endDate) {
      this.dateRange.push(startDate.toISOString().split('T')[0]);
      startDate.setUTCDate(startDate.getUTCDate() + 1);
    }
  }

  createSlotData() {
    return this.timeSlots.reduce((acc, slot) => {
      acc[slot] = 0;
      return acc;
    }, {});
  }

  handlePageChange(event: number) {
    this.paginationConfig.currentPage = event;
    this.updatePaginationInfo();
  }

  handleItemsPerPageChange(event: any) {
    this.paginationConfig.itemsPerPage = event.target.value;
    this.updatePaginationInfo();
  }

  updatePaginationInfo() {
    this.totalItems = this.schedule.length;
    this.firstItemIndex = (this.paginationConfig.currentPage - 1) * this.paginationConfig.itemsPerPage;
    this.lastItemIndex = Math.min(this.firstItemIndex + this.paginationConfig.itemsPerPage, this.totalItems);
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  generateCalendar() {
    const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }

  selectDate(day: number) {
    this.selectedDate = `${this.currentYear}-${(this.currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    this.showCalendar = false;
  }

  saveDetails(): void {
    console.log(this.schedule);
  }
}
