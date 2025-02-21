import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-vaccination-center',
  templateUrl: './search-vaccination-center.component.html',
  styleUrl: './search-vaccination-center.component.scss'
})
export class SearchVaccinationCenterComponent implements OnInit {
  @Input() patient!: any;
  @Input() appoinment!: any;

  selectedState: string = '';
  selectedDistrict: string = '';
  pinCode: string = '';

  states: string[] = ['Jamaica', 'Kingston', 'St. Andrew', 'Portmore'];
  districts: string[] = ['CLARENDON', 'HANOVER', 'KINGSTON', 'MANCHESTER', 'PORTLAND', 'ST. ANDREW', 'ST. ANN',
    'ST. CATHERINE', 'ST. ELIZABETH', 'ST. JAMES', 'ST. MARY', 'ST. THOMAS', 'TRELAWNY', 'WESTMORELAND'];
  showSearchResult: boolean = false;

  // Define stateDistricts with explicit types
  stateDistricts: Record<string, string[]> = {
    'Jamaica': ['Montego Bay', 'Mandeville', 'Negril'],
    'Kingston': ['Downtown', 'New Kingston', 'Papine'],
    'St. Andrew': ['Half Way Tree', 'Constant Spring', 'Red Hills'],
    'Portmore': ['Greater Portmore', 'Bridgeport', 'Waterford']
  };

  constructor() {}

  ngOnInit(): void {}

  onTabChanged(ebent: any): void {
    this.showSearchResult = false;
  }

  onStateChange() {
    // Ensure the selected state exists in the object
    this.districts = this.stateDistricts[this.selectedState] || [];
  }

  searchByDistrict() {
    if (this.selectedDistrict) {
      this.showSearchResult = true;
      // alert(`Searching centers in ${this.selectedDistrict}, ${this.selectedState}`);
    } else {
      // alert('Please select a state and district.');
    }
  }

  searchByPin() {
    if (this.pinCode.length === 6) {
      this.showSearchResult = true;
      // alert(`Searching centers for PIN: ${this.pinCode}`);
    } else {
      // alert('Please enter a valid 6-digit PIN code.');
    }
  }
}
