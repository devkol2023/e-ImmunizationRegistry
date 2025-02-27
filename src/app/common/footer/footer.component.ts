import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerDate!: number;
  constructor() {
    this.copyRightDate();
  }
  copyRightDate() {
    this.footerDate = new Date().getFullYear();
  }
}