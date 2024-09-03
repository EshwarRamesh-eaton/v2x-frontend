import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breaker-info',
  standalone: false,
  templateUrl: './breaker-info.component.html',
  styleUrl: './breaker-info.component.scss'
})
export class BreakerInfoComponent {
@Input() deviceDetails
}
