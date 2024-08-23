import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesComponent } from './devices.component';
import { AppModule } from 'src/app/app.module';
import { DashboardModule } from '../../dashboard.module';

fdescribe('DevicesComponent', () => {
  let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;
  let deviceDetails = [
    {
      uuid: 'ufhmdasd',
      name: 'Garage EV Charger',
      isEnabled: false,
      state: false,
      type: 'EV',
      critical: true
    },
    {
      uuid: 'hasdhjas',
      name: 'Pool Pump Breaker',
      isEnabled: true,
      state: true,
      type: 'Breaker',
      critical: true
    },
    {
      uuid: 'hjasdhjas',
      name: 'Kitchen Breaker',
      isEnabled: true,
      state: false,
      type: 'Breaker',
      critical: false
    },
    {
      uuid: 'hjasdhjas',
      name: 'MID Breaker',
      isEnabled: false,
      state: false,
      type: 'Breaker',
      critical: false
    },
    {
      uuid: 'sadasd',
      name: 'MID Breaker 2',
      isEnabled: false,
      state: false,
      type: 'Breaker',
      critical: false
    },
    {
      uuid: 'ufhmdasd',
      name: 'TDD Workshop',
      isEnabled: true,
      state: true,
      type: 'Breaker',
      critical: true
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesComponent ],
      imports: [AppModule, DashboardModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.devices = deviceDetails
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify devices', () => {
    expect(component.devices).toEqual(deviceDetails)
  })
});
