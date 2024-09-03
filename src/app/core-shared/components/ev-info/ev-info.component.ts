import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ev-info',
  standalone: false,
  templateUrl: './ev-info.component.html',
  styleUrl: './ev-info.component.scss'
})
export class EvInfoComponent {
@Input() deviceDetails;
}
