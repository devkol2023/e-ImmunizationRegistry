import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaccineModalComponent } from './add-vaccine-modal.component';

describe('AddVaccineModalComponent', () => {
  let component: AddVaccineModalComponent;
  let fixture: ComponentFixture<AddVaccineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVaccineModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVaccineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
