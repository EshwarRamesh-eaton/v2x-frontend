import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { LoginModule } from '../login/login.module';
import { AppModule } from 'src/app/app.module';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  const activatedRouteStub = {queryParams: new BehaviorSubject<any>({})};
  const routerStub = jasmine.createSpyObj('router', ['navigate']);
  routerStub.navigate.and.callFake(() => {});
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      imports: [AppModule, LoginModule],
      providers: [
        {provide: Router, useValue: routerStub},
        {provide: ActivatedRoute, useValue: activatedRouteStub},
      ]    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
