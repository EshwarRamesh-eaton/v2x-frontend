import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryRemainingTimeCardComponent } from './battery-remaining-time-card.component';

describe('BatteryRemainingTimeCardComponent', () => {
  let component: BatteryRemainingTimeCardComponent;
  let fixture: ComponentFixture<BatteryRemainingTimeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatteryRemainingTimeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatteryRemainingTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
