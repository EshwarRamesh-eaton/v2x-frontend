import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-battery-remaining-time-card',
  standalone: false,
  templateUrl: './battery-remaining-time-card.component.html',
  styleUrl: './battery-remaining-time-card.component.scss'
})
export class BatteryRemainingTimeCardComponent {
@Input() timeRemaining: string;
}
