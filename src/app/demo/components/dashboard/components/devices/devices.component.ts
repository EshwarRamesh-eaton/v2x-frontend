import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/demo/api/devices';
import { DeviceService } from 'src/app/demo/service/device.service';

@Component({
  selector: 'app-devices',
  standalone: false,
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent implements OnInit {
  devices: Device[];
  activeIndex = 1
  checked = false;
  deviceVisibile = false;
  toggleWasDone = false;
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
      this.getDevices();
  }

  getDevices() {
    this.deviceService.getDevices()
    .then((resp) => {
      this.devices = resp;
    }).catch(() => {
      // TODO: Add errors here
      this.devices = [    {
        uuid: 'ufhmdasd',
        name: 'Garage EV Charger',
        isEnabled: false,
        state: false,
        type: 'EV',
        critical: true
      },
      {
        uuid: 'hasdhjas',
        name: 'Pool Pump Breaker',
        isEnabled: true,
        state: true,
        type: 'Breaker',
        critical: true
      },
      {
        uuid: 'hjasdhjas',
        name: 'Kitchen Breaker',
        isEnabled: true,
        state: false,
        type: 'Breaker',
        critical: false
      },
      {
        uuid: 'hjasdhjas',
        name: 'MID Breaker',
        isEnabled: false,
        state: false,
        type: 'Breaker',
        critical: false
      },
      {
        uuid: 'sadasd',
        name: 'MID Breaker 2',
        isEnabled: false,
        state: false,
        type: 'Breaker',
        critical: false
      },
      {
        uuid: 'ufhmdasd',
        name: 'TDD Workshop',
        isEnabled: true,
        state: true,
        type: 'Breaker',
        critical: true
      }]
    })
  }

  getDeviceInfo() {
    // TODO: This call is yet to be designed
  }

  toggleDeviceVisibility() {
    this.deviceVisibile = !this.deviceVisibile;
  }

  deviceInfo(stateChange: any) {
    // we are toggling a switch
    if(stateChange === 2) {
      this.toggleWasDone = true;
    } else if (stateChange === 1 && !this.toggleWasDone) {

      this.toggleDeviceVisibility();
    } else {
      this.toggleWasDone = false;
    }

  }
}
