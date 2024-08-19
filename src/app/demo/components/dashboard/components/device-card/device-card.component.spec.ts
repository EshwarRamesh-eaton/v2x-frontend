import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCardComponent } from './device-card.component';
import { AppModule } from 'src/app/app.module';
import { DashboardModule } from '../../dashboard.module';

fdescribe('DeviceCardComponent', () => {
  let component: DeviceCardComponent;
  let fixture: ComponentFixture<DeviceCardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceCardComponent ],
      imports: [AppModule, DashboardModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceCardComponent);
    component = fixture.componentInstance;
    component.device = {
      uuid: 'ufhmdasd',
      name: 'Garage EV Charger',
      isEnabled: false,
      state: false,
      type: 'EV',
      critical: true
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should verify device details', () => {
    expect(component.device).toEqual({
      uuid: 'ufhmdasd',
      name: 'Garage EV Charger',
      isEnabled: false,
      state: false,
      type: 'EV',
      critical: true
    })
  })

});
