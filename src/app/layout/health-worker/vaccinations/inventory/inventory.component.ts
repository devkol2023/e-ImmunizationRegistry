import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddVaccineModalComponent } from '../../../../shared/modal/add-vaccine-modal/add-vaccine-modal.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  tableColumns = [
    { key: 'name', label: 'Vaccine Name', width: '20%' },
    { key: 'stock', label: 'Stock Available', width: '20%' },
    { key: 'expiry', label: 'Expiration Date', width: '20%' },
    { key: 'actions', label: 'Actions', width: '20%' }
  ];

  vaccineInventory = [
    { name: 'Pfizer', stock: 100, expiry: '2025-08-01' },
    { name: 'Moderna', stock: 80, expiry: '2025-10-15' },
    { name: 'AstraZeneca', stock: 50, expiry: '2025-07-10' }
  ];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.vaccineInventory.length
  };


  constructor(private dialog: MatDialog) {}


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
}
