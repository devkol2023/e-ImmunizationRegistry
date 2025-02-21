import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthWorkerDashboardComponent } from './health-worker-dashboard.component';

describe('HealthWorkerDashboardComponent', () => {
  let component: HealthWorkerDashboardComponent;
  let fixture: ComponentFixture<HealthWorkerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthWorkerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthWorkerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
