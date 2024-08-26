import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopBarComponent } from './app.topbar.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';
import { AuthService } from 'src/app/demo/service/auth.service';
import { DebugElement } from '@angular/core';

fdescribe('AppTopBarComponent', () => {
  let component: AppTopBarComponent;
  let fixture: ComponentFixture<AppTopBarComponent>;
  let authService: any;
  let debugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTopBarComponent],
      imports: [AppModule, AppLayoutModule],
      providers: [AuthService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppTopBarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    authService = debugElement.injector.get(AuthService)
    spyOn(authService, 'logout');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate items for menu', () => {
    expect(component.items.length).toEqual(1)
  })

  it('should call authservice logout', () => {
    component.logOut();
    expect(authService.logout).toHaveBeenCalled();
  })
});
