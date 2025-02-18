import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationStepsComponent } from './vaccination-steps.component';

describe('VaccinationStepsComponent', () => {
  let component: VaccinationStepsComponent;
  let fixture: ComponentFixture<VaccinationStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaccinationStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
