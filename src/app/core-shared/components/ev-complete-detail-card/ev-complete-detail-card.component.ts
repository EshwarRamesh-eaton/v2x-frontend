import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ev-complete-detail-card',
  standalone: false,
  templateUrl: './ev-complete-detail-card.component.html',
  styleUrl: './ev-complete-detail-card.component.scss'
})
export class EvCompleteDetailCardComponent implements OnChanges {
  @Input() deviceInfo: any;
  hours: number;
  minutes: number;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['deviceInfo']) {
        this.deviceInfo = changes['deviceInfo'].currentValue;
        if (this.deviceInfo.charge_time >= 60) {
          this.toHoursAndMinutes(this.deviceInfo.charge_time)
        } else {
          this.hours = 0;
          this.minutes = this.deviceInfo.charge_time;
        }
      }
  }

  toHoursAndMinutes(totalMinutes) {
    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;
  }
}
