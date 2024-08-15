import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppModule } from 'src/app/app.module';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthModule } from '../auth.module';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login.module';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [AppModule, LoginModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls', () => {
    expect(component.userLoginForm.contains('username')).toBeTruthy();
    expect(component.userLoginForm.contains('password')).toBeTruthy();
  });
});
