import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DeviceService } from 'src/app/demo/service/device.service';

@Component({
  selector: 'app-ev-info',
  standalone: false,
  templateUrl: './ev-info.component.html',
  styleUrl: './ev-info.component.scss'
})
export class EvInfoComponent implements OnChanges {
@Input() deviceDetails;
@Output() triggerCloseScreen = new EventEmitter();;
hours: number;
minutes: number;
constructor(private deviceService: DeviceService) {}

ngOnChanges(changes: SimpleChanges): void {
    if (changes['deviceDetails']) {
      this.deviceDetails = changes['deviceDetails'].currentValue;
      if (this.deviceDetails.charge_time >= 60) {
        this.toHoursAndMinutes(this.deviceDetails.charge_time)
      } else {
        this.hours = 0;
        this.minutes = this.deviceDetails.charge_time;
      }
    }
}

toHoursAndMinutes(totalMinutes) {
  this.hours = Math.floor(totalMinutes / 60);
  this.minutes = totalMinutes % 60;
}

passDeviceDetails() {
  this.deviceService.deviceData(this.deviceDetails)
  this.deviceService.showInfoVariable(true);
  this.triggerCloseScreen.emit();
}
}
