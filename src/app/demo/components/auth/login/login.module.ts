import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordModule,
        ToolbarModule
    ],
    declarations: [LoginComponent, FooterComponent, ForgotPasswordComponent]
})
export class LoginModule { }
