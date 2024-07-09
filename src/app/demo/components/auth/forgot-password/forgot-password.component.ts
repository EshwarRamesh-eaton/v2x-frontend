import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})

export class ForgotPasswordComponent implements OnInit {
  email!: FormControl;
  forgotPasswordForm!: FormGroup;
  constructor(
    private messageService: MessageService, 
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.forgotPasswordForm = new FormGroup({
      email: this.email
  });
  }

  submitForgotPassword() {
    this.authService.forgotPassword({email: this.forgotPasswordForm.controls['email'].value})
    .then(() => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'New password has been sent to your email address', life: 3000 });
      this.router.navigate(['login'])
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cannot process your request at this time. Please try later', life: 3000 });
    })
    
    
  }
}
