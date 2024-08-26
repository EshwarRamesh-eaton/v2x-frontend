import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryExtensionComponent } from './battery-extension.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';

fdescribe('BatteryExtensionComponent', () => {
  let component: BatteryExtensionComponent;
  let fixture: ComponentFixture<BatteryExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatteryExtensionComponent],
      imports: [AppModule, AppLayoutModule]
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
