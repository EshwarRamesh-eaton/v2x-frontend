import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-eula',
  standalone: false,
  templateUrl: './eula.component.html',
  styleUrl: './eula.component.scss'
})
export class EulaComponent implements OnInit {
  constructor(public ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  accept() {
    this.ref.close(true);
  }

  reject() {
    this.ref.close(false);
  }

}

