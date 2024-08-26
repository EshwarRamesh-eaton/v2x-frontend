import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendBatteryLifeNotificationComponent } from './extend-battery-life-notification.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';
import { By } from '@angular/platform-browser';
import { GridStateValue } from 'src/app/demo/api/home';

fdescribe('ExtendBatteryLifeNotificationComponent', () => {
  let component: ExtendBatteryLifeNotificationComponent;
  let fixture: ComponentFixture<ExtendBatteryLifeNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtendBatteryLifeNotificationComponent],
      imports: [AppModule, AppLayoutModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtendBatteryLifeNotificationComponent);
    component = fixture.componentInstance;
    component.homeSummary = {
      homeState: '',
      gridState: GridStateValue.lost,
      breakersInUse: 1,
      breakersTotal: 10,
      dailyUsage:10,
      devicesInUse: 1,
      devicesTotal: 10,
      sourcesRemaining: [
        {
          source: {
            id: 'hhjjasd',
            name: 'Battery',
            type: 'Battery',
            minimumCharge: 10
          },
          timeRemaining: 10,
          stateOfCharge: 10,
        }
      ]
    };

    component.sourceRemaining = {
      source: {
        id: 'hhjjasd',
        name: 'Battery',
        type: 'Battery',
        minimumCharge: 10
      },
      timeRemaining: 10,
      stateOfCharge: 10,
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when navToBatteryExtensionPage function is called', () => {
    spyOn(component.showBatteryPage, 'emit');
    component.navToBatteryExtensionPage();
    expect(component.showBatteryPage.emit).toHaveBeenCalled();
  });

  it('should call navToBatteryExtensionPage function when nav button is pressed', () => {
    spyOn(component, 'navToBatteryExtensionPage');
    let divElement = fixture.debugElement.query(By.css('#nav-button'));
    divElement.nativeElement.click()
    expect(component.navToBatteryExtensionPage).toHaveBeenCalled()
  })
});
