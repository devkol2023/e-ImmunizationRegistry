import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStatisticsBannerComponent } from './top-statistics-banner.component';

describe('TopStatisticsBannerComponent', () => {
  let component: TopStatisticsBannerComponent;
  let fixture: ComponentFixture<TopStatisticsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopStatisticsBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStatisticsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
