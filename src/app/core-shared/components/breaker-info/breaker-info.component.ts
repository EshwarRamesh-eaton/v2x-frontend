import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeviceService } from 'src/app/demo/service/device.service';

@Component({
  selector: 'app-breaker-info',
  standalone: false,
  templateUrl: './breaker-info.component.html',
  styleUrl: './breaker-info.component.scss'
})
export class BreakerInfoComponent {
@Input() deviceDetails
@Output() triggerCloseScreen = new EventEmitter();

constructor(private deviceService: DeviceService) {}

  passDeviceDetails() {
    this.deviceService.deviceData(this.deviceDetails)
    this.deviceService.showInfoVariable(true);
    this.triggerCloseScreen.emit();
  }
}
