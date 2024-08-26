import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFooterComponent } from './mobile-footer.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';
import { By } from '@angular/platform-browser';
import { LayoutService } from '../service/app.layout.service';
import { DebugElement } from '@angular/core';
import { AuthService } from 'src/app/demo/service/auth.service';

fdescribe('MobileFooterComponent', () => {
  let component: MobileFooterComponent;
  let fixture: ComponentFixture<MobileFooterComponent>;
  let debugElement: DebugElement;
  let layoutService: any;
  let authService: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileFooterComponent],
      imports: [AppModule, AppLayoutModule],
      providers: [LayoutService, AuthService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileFooterComponent);
    component = fixture.componentInstance; 
    debugElement = fixture.debugElement;
    layoutService = debugElement.injector.get(LayoutService)
    spyOn(layoutService, 'isMobile').and.returnValue(true);
    
    authService = debugElement.injector.get(AuthService)
    spyOnProperty(authService, 'isAuthenticated', 'get').and.returnValue(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true for mobile device', () => {
   let isMobile = layoutService.isMobile()
   expect(isMobile).toEqual(true);
  })

  it('should return true for authenticated', () => {
    let isAuthenticated = authService.isAuthenticated
    expect(isAuthenticated).toEqual(true);
   })

  it('should call navToHome when home button is pressed', () => {
    spyOn(component, 'navToHome');
    let divElement = fixture.debugElement.query(By.css('#home'));
    divElement.nativeElement.click()
    expect(component.navToHome).toHaveBeenCalled()
  })

  it('should call navToEnergy when energy button is pressed', () => {
    spyOn(component, 'navToEnergy');
    let divElement = fixture.debugElement.query(By.css('#energy'));
    divElement.nativeElement.click()
    expect(component.navToEnergy).toHaveBeenCalled()
  })

  it('should call navToSchedules when schedules button is pressed', () => {
    spyOn(component, 'navToSchedules');
    let divElement = fixture.debugElement.query(By.css('#schedule'));
    divElement.nativeElement.click()
    expect(component.navToSchedules).toHaveBeenCalled()
  })

  it('should call navToSchedules when schedules button is pressed', () => {
    spyOn(component, 'navToScenes');
    let divElement = fixture.debugElement.query(By.css('#scene'));
    divElement.nativeElement.click()
    expect(component.navToScenes).toHaveBeenCalled()
  })
});
