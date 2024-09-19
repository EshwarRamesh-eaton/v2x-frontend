import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valCheck: string[] = ['remember'];

    username!: FormControl;
    password!: FormControl;
    userLoginForm!: FormGroup;

    constructor(
        public layoutService: LayoutService, 
        private router: Router,
        private messageService: MessageService,
        private authService: AuthService) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.username = new FormControl('', [Validators.required]);
        this.password = new FormControl('', [Validators.required]);
        this.userLoginForm = new FormGroup({
            username: this.username,
            password: this.password
        });
    }

    submitLogin() {
        this.authService.login(this.userLoginForm.controls['username'].value, this.userLoginForm.controls['password'].value)
        .then(() => {
            this.authService.navToDashboard();
        }).catch(() => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials', life: 3000 });
        })
    }


    navToForgotPassword() {
        this.router.navigate(['login/forgot-password'])
    }
}
