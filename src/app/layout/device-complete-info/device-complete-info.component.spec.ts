import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCompleteInfoComponent } from './device-complete-info.component';

describe('DeviceCompleteInfoComponent', () => {
  let component: DeviceCompleteInfoComponent;
  let fixture: ComponentFixture<DeviceCompleteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceCompleteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceCompleteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
