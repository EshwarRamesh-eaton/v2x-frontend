import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryExtensionComponent } from './battery-extension.component';

describe('BatteryExtensionComponent', () => {
  let component: BatteryExtensionComponent;
  let fixture: ComponentFixture<BatteryExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatteryExtensionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatteryExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
