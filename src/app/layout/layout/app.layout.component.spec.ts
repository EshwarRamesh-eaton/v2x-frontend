import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';
import { AppLayoutComponent } from './app.layout.component';
import { HomeService } from 'src/app/demo/service/home.service';
import { DebugElement } from '@angular/core';

fdescribe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;
  let debugElement: DebugElement;
  let homeService: any;
  let summarySample = {
    homeState: 'CONNECTED',
    gridState: 'LOST',
    breakersInUse: 10,
    breakersTotal: 12,
    dailyUsage: 15,
    devicesInUse: 10,
    devicesTotal: 12,
    sourcesRemaining: [
      {
        source: {
          id: 'asds',
          name: 'V2H',
          type: 'BATTERY',
          minimumCharge: 80,
        },
        timeRemaining: 8,
        stateOfCharge: 12, // TODO: What value should this be for the notification to show up
      }
    ]
}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppLayoutComponent],
      imports: [AppModule, AppLayoutModule],
      providers: [HomeService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    homeService = debugElement.injector.get(homeService)
    let getHomeSummarySpy = spyOn(homeService, 'getHomeSummary').and.returnValue(Promise.resolve(summarySample));
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call homeSummary', () => {
    expect(component.homeSummary).toEqual(summarySample)
  })
});
