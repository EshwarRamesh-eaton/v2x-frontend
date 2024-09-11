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
@Output() triggerCloseScreen = new EventEmitter();
hours: number;
minutes: number;
statusPointer = 0;
intervalId: any;
disableUnplugButton = false;
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

// This is only for the demo
cycleStates() {  
  this.statusPointer = 0
  const evState = ['Unplugged', 'Plugged In', 'Preparing', 'Charging', 'Charged'];
  if (this.deviceDetails.status === 'Unplugged') {
    this.statusPointer += 1;
    this.disableUnplugButton = true;
    this.deviceDetails.status = evState[this.statusPointer];
    this.intervalId = setInterval(() => {
      this.statusPointer +=1
      this.deviceDetails.status = evState[this.statusPointer];
      if (this.statusPointer === 4) {
        this.disableUnplugButton = false;
        this.stopInterval()
      }
    }, 5000)
    
  } else {
    this.deviceDetails.status = evState[this.statusPointer];
  }
}

stopInterval() {
  if(this.intervalId) {
    clearInterval(this.intervalId)
  }
  
}

ngOnDestroy() {
  if(this.intervalId) {
    clearInterval(this.intervalId)
  }
}
}
