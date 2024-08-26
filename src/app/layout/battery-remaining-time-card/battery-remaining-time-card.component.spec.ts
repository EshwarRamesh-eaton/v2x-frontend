import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryRemainingTimeCardComponent } from './battery-remaining-time-card.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';
import { SimpleChange } from '@angular/core';

fdescribe('BatteryRemainingTimeCardComponent', () => {
  let component: BatteryRemainingTimeCardComponent;
  let fixture: ComponentFixture<BatteryRemainingTimeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatteryRemainingTimeCardComponent],
      imports: [AppModule, AppLayoutModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatteryRemainingTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change value of timeRemaining', () => {
    spyOn(component, 'toHoursAndMinutes').and.callThrough();
    component.timeRemaining = 61;
    let prev_value = 61;
    let new_value = 100;
    let is_first_change: boolean = false;
    component.ngOnChanges({
      timeRemaining: new SimpleChange(prev_value, new_value, is_first_change),
    });
    expect(component.timeRemaining).toEqual(100);
    expect(component.toHoursAndMinutes).toHaveBeenCalledTimes(1);
    prev_value = 100;
    new_value = 30;
    is_first_change = false;
    component.ngOnChanges({
      timeRemaining: new SimpleChange(prev_value, new_value, is_first_change),
    });
    expect(component.timeRemaining).toEqual(30);
    expect(component.toHoursAndMinutes).not.toHaveBeenCalledTimes(2);
  })

  it('should check value of hours and mins', () => {
    spyOn(component, 'toHoursAndMinutes').and.callThrough();
    component.timeRemaining = 61;
    let prev_value = 61;
    let new_value = 100;
    let is_first_change: boolean = false;
    component.ngOnChanges({
      timeRemaining: new SimpleChange(prev_value, new_value, is_first_change),
    });
    expect(component.hours).toEqual(1);
    expect(component.minutes).toEqual(40);
    prev_value = 100;
    new_value = 30;
    is_first_change = false;
    component.ngOnChanges({
      timeRemaining: new SimpleChange(prev_value, new_value, is_first_change),
    });
    expect(component.hours).toEqual(0);
    expect(component.minutes).toEqual(30);
  })

});
