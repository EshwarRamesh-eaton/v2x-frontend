import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInfoCardComponent } from './device-info-card.component';
import { AppModule } from 'src/app/app.module';
import { CoreSharedModule } from '../../core-shared.module';

fdescribe('DeviceInfoCardComponent', () => {
  let component: DeviceInfoCardComponent;
  let fixture: ComponentFixture<DeviceInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceInfoCardComponent ],
      imports: [AppModule, CoreSharedModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
