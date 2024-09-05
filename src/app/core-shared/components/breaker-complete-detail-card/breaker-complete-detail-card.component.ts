import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breaker-complete-detail-card',
  standalone: false,
  templateUrl: './breaker-complete-detail-card.component.html',
  styleUrl: './breaker-complete-detail-card.component.scss'
})
export class BreakerCompleteDetailCardComponent {
  @Input() deviceInfo: any;
}
