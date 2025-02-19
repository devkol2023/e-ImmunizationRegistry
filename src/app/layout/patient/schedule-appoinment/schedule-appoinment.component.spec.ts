import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAppoinmentComponent } from './schedule-appoinment.component';

describe('ScheduleAppoinmentComponent', () => {
  let component: ScheduleAppoinmentComponent;
  let fixture: ComponentFixture<ScheduleAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleAppoinmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
