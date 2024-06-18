import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})

export class ForgotPasswordComponent implements OnInit {
  constructor(private messageService: MessageService, private router: Router,) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {

  }

  submitForgotPassword() {
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'New password has been sent to your email address', life: 3000 });
    this.router.navigate(['login'])
  }
}
