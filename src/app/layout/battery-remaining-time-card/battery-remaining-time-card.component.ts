import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-battery-remaining-time-card',
  standalone: false,
  templateUrl: './battery-remaining-time-card.component.html',
  styleUrl: './battery-remaining-time-card.component.scss'
})
export class BatteryRemainingTimeCardComponent implements OnInit, OnChanges {
@Input() timeRemaining: number;
hours = 0;
minutes = 0
constructor() {}

ngOnInit(): void {
}

ngOnChanges(changes: SimpleChanges): void {
    if (changes['timeRemaining']) {
      this.timeRemaining = changes['timeRemaining'].currentValue;
      if (this.timeRemaining >= 60) {
        this.toHoursAndMinutes(this.timeRemaining)
      } else {
        this.hours = 0;
        this.minutes = this.timeRemaining;
      }
      
    }
}

toHoursAndMinutes(totalMinutes) {
  this.hours = Math.floor(totalMinutes / 60);
  this.minutes = totalMinutes % 60;
}
}
