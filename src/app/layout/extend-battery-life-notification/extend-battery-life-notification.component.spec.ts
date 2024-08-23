import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendBatteryLifeNotificationComponent } from './extend-battery-life-notification.component';

describe('ExtendBatteryLifeNotificationComponent', () => {
  let component: ExtendBatteryLifeNotificationComponent;
  let fixture: ComponentFixture<ExtendBatteryLifeNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendBatteryLifeNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtendBatteryLifeNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
