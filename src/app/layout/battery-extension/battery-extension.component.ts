import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { HomeSourceRemaining } from 'src/app/demo/api/home';

@Component({
  selector: 'app-battery-extension',
  standalone: false,
  templateUrl: './battery-extension.component.html',
  styleUrl: './battery-extension.component.scss'
})
export class BatteryExtensionComponent implements OnInit {
  @Input() show = false;
  @Input() sourceRemaining: HomeSourceRemaining;
  @Output() closeScreen = new EventEmitter();
  allBoxes = false;
  deviceInfo: any[] = [
    {
      name: 'Water Heater',
      current: 20,
      timeRemaining: 45,
      status: false
    },
    {
      name: 'Water Heater 2',
      current: 20,
      timeRemaining: 200,
      status: false
    },
    {
      name: 'Garrage Lights',
      current: 20,
      timeRemaining: 125,
      status: false
    }
  ];
  disableTurnOffLoadButton = true;
  showComfortModeButton = false;
  totalTimeRemaining = 0;
  totalHours = 0;
  totalMinutes = 0;
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    //get device info and call toHoursAndMinutes()
    this.toHoursAndMinutes();
  }

  getDeviceInfo() {
    // get this data and populate deviceInfo and duplicateDeviceInfo variables
  }

  toHoursAndMinutes() {
    let count = 0;
    const length = this.deviceInfo.length;
    this.totalTimeRemaining = 0;
    this.deviceInfo.forEach((device) => {
      if (device.status) {
        count += 1;
        // show comfort mode button since device status is true for atleast one breaker
        this.showComfortModeButton = true;
        // add some logic for total time
      }
      this.totalTimeRemaining += device.timeRemaining;
      const remainingTime = this.getHourandMins(device.timeRemaining)
      device.hours = remainingTime.hours;
      device.minutes = remainingTime.mins;     
    })

    const totalRemainingTime = this.getHourandMins(this.totalTimeRemaining)
    this.totalHours = totalRemainingTime.hours;
    this.totalMinutes = totalRemainingTime.mins;
        
    if (count === length) {
      this.allBoxes = true;
      this.selectOrDeselectAllCheckboxes();
    }
  }

  getHourandMins(timeRemaining) {
    let hours = 0;
    let mins = 0;
    if (timeRemaining >= 60) {
      hours = Math.floor(timeRemaining / 60);
      mins =timeRemaining % 60;
    } else {
      hours = 0;
      mins = timeRemaining;
    }
    return {hours, mins}
  }

  // TODO: The timeremaining needs to be converted into hrs and mins - see what backedn will give here
  // TODO: Get real data see which model pertains to this section 

  selectOrDeselectAllCheckboxes() {
    // once we have the modal, implement the select all checkbox funtionality
    this.disableTurnOffLoadButton = false
    this.allBoxes ? this.deviceInfo.forEach(e => e.status = true) : this.deviceInfo.forEach(e => e.status = false)
  }



  turnOffSelectedLoads(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      acceptLabel: 'Confirm',
      rejectLabel: 'Deny',
      message: 'Your selection will increase back-up time by x hours and y minutes. \n Note that this will disable Comfort Mode with Load Prioritization.',
      accept: () => {
        // make 2 calls here
        this.showComfortModeButton = true;
        this.disableTurnOffLoadButton = true;
        return
      },
      reject: () => {
          return
      }
  });
  }

  turnOnComfortMode() {
    // Make the call to turn on comfort mode
    this.showComfortModeButton = false;
  }
}
