import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Device, DeviceStateValue, DeviceType } from 'src/app/demo/api/devices';
import { DeviceService } from 'src/app/demo/service/device.service';

@Component({
  selector: 'app-device-card',
  standalone: false,
  templateUrl: './device-card.component.html',
  styleUrl: './device-card.component.scss'
})
export class DeviceCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() device: Device;
  @Output() showInfo = new EventEmitter<any>();
  deviceStateValue = DeviceStateValue;
  deviceTypeValue = DeviceType;
  toggleState = false;
  constructor(private deviceService: DeviceService) {

  }
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['device']) {
        this.device = changes['device'].currentValue;
        this.toggleState = this.device.state === this.deviceStateValue.on ? true : false
      }
  }

  toggleInputSwitch(state: number) {
    this.showInfo.emit(state);
    this.device.state = this.toggleState === true ? this.deviceStateValue.on : this.deviceStateValue.off
    this.deviceService.updateDeviceById(this.device.id, this.device)
    .then(() => {

    }).catch(() => {
      
    })
    
  }

  ngOnDestroy() {}
}
