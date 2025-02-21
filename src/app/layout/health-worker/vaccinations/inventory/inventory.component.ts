import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddVaccineModalComponent } from '../../../../shared/modal/add-vaccine-modal/add-vaccine-modal.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  tableColumns = [
    { key: 'name', label: 'Vaccine Name', width: '20%' },
    { key: 'stock', label: 'Stock Available', width: '20%' },
    { key: 'expiry', label: 'Expiration Date', width: '20%' },
    { key: 'status', label: 'Status', width: '10%'},
    { key: 'actions', label: 'Actions', width: '10%' }
  ];

  vaccineInventory = [
    { name: 'Pfizer', stock: 10, expiry: '2025-03-15', status: '' }, // Expiring Soon
    { name: 'Moderna', stock: 5, expiry: '2024-05-20', status: '' }, // Low Stock
    { name: 'AstraZeneca', stock: 50, expiry: '2025-07-10', status: '' },
    { name: 'J&J', stock: 3, expiry: '2025-02-28', status: '' } // Expired
  ];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.vaccineInventory.length
  };


  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateVaccineStatuses();
  }

  openDialog(vaccine?: any, index?: number): void {
    const dialogRef = this.dialog.open(AddVaccineModalComponent, {
      width: '50%',
      data: vaccine
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vaccineInventory = [...this.vaccineInventory, result];
      }
    });
  }


  deleteVaccine(index: number): void {
    this.vaccineInventory.splice(index, 1);
    this.paginationConfig.totalItems = this.vaccineInventory.length;
  }

  updateItemsPerPage(itemsPerPage: number): void {
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1;
  }

  updatePage(page: number): void {
    this.paginationConfig.currentPage = page;
  }

  updateVaccineStatuses(): void {
    this.vaccineInventory.forEach((vaccine) => {
      if (this.isExpired(vaccine.expiry)) {
        vaccine.status = 'Expired';
      } else if (this.isExpiringSoon(vaccine.expiry)) {
        vaccine.status = 'Expiring Soon';
      } else if (this.isLowStock(vaccine.stock)) {
        vaccine.status = 'Low Stock';
      } else {
        vaccine.status = 'Good';
      }
    });
  }

  isLowStock(stock: number): boolean {
    return stock < 20;
  }

  isExpiringSoon(expiry: string): boolean {
    const expiryDate = new Date(expiry);
    const today = new Date();
    const daysDifference = (expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24);
    return daysDifference < 30 && daysDifference >= 0;
  }

  isExpired(expiry: string): boolean {
    const expiryDate = new Date(expiry);
    const today = new Date();
    return expiryDate < today;
  }
}
