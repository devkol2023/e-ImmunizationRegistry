import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCenterResultComponent } from './vaccination-center-result.component';

describe('VaccinationCenterResultComponent', () => {
  let component: VaccinationCenterResultComponent;
  let fixture: ComponentFixture<VaccinationCenterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaccinationCenterResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationCenterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
