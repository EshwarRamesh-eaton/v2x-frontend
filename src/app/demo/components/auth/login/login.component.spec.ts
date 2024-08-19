import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AppModule } from 'src/app/app.module';
import { LoginModule } from './login.module';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const activatedRouteStub = {queryParams: new BehaviorSubject<any>({})};
  const routerStub = jasmine.createSpyObj('router', ['navigate']);
  routerStub.navigate.and.callFake(() => {});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [AppModule, LoginModule],
      providers: [
        {provide: Router, useValue: routerStub},
        {provide: ActivatedRoute, useValue: activatedRouteStub},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // spyOn(authService, 'submitLogin')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls', () => {
    expect(component.userLoginForm.contains('username')).toBeTruthy();
    expect(component.userLoginForm.contains('password')).toBeTruthy();
  });

  it('should disable submit button when no input is given to username and password', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.disabled).toBeTruthy();
    component.userLoginForm.controls['username'].setValue('admin')
    component.userLoginForm.controls['password'].setValue('admin')
    fixture.detectChanges();
    tick();
    expect(button.disabled).toBeFalsy();
  }))

  it('should call submitlogin function when submit button is clicked', fakeAsync(() => {
    spyOn(component, 'submitLogin')
    component.userLoginForm.controls['username'].setValue('admin')
    component.userLoginForm.controls['password'].setValue('admin')
    fixture.detectChanges();
    tick();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    tick();
    expect(component.submitLogin).toHaveBeenCalledTimes(1);
  }))


  xit('should call authservice login method when submit button is clicked', fakeAsync(() => {
    component.userLoginForm.controls['username'].setValue('admin')
    component.userLoginForm.controls['password'].setValue('admin')
    fixture.detectChanges();
    tick();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    tick();
    expect(component.submitLogin).toHaveBeenCalledTimes(1);
  }))

  it('should call navigate to forgot password when navToForgotPassword function is called', () => {
   component.navToForgotPassword();
   expect(routerStub.navigate).toHaveBeenCalledTimes(1)
  })

  //TODO: Other functionalities such as remember me, contact eaton support and forgot password are all dummy for the time being so write tests as they are about to be developed
});
