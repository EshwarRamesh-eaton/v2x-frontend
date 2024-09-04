import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAreasComponent } from './device-areas.component';

describe('DeviceAreasComponent', () => {
  let component: DeviceAreasComponent;
  let fixture: ComponentFixture<DeviceAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceAreasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
