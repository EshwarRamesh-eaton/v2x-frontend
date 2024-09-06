import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/demo/api/devices';
import { GridStateValue, HomeSummary } from 'src/app/demo/api/home';
import { DeviceService } from 'src/app/demo/service/device.service';

@Component({
  selector: 'app-devices',
  standalone: false,
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent implements OnInit {
  devices: Device[];
  devicesInfo: any = [];
  currentDeviceInfo: any;
  activeIndex = 1
  checked = false;
  deviceVisibile = false;
  toggleWasDone = false;
  @Input() homeSummary: HomeSummary;
  gridValue = GridStateValue;
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
        uuid: 'hjhasd97',
        name: 'TDD Workshop',
        isEnabled: true,
        state: true,
        type: 'Breaker',
        critical: true
      }]
      this.devices.forEach((device) => {
        this.getDeviceInfo(device)
      })
    })
  }

  getDeviceInfo(device: Device) {
    // TODO: This call is yet to be designed so we are creating data here. This will be replaced with actual device data
    const evState = ['Unplugged', 'Plugged In', 'Preparing', 'Charging', 'Charged', 'Error', 'Fault', 'Tripped', 'Unresponsive']
    // const deviceState = evState[Math.floor(Math.random() * (8 - 0 + 1) + 0)];
    const deviceState = evState[4]
    this.devicesInfo.push({
      uuid: device.uuid,
      name: device.name,
      type: device.type,
      state: device.state,
      status: device.type === 'Breaker' && device.state === true ? 'ON' : device.type === 'breaker' && device.state === false ? 'OFF' : device.type === 'EV' ? deviceState : '',
      power: 120, 
      total_current: 20, 
      current: 10, 
      load_on_breaker: 45,
      energy_added: deviceState === 'Error' || deviceState === 'Tripped' || deviceState === 'fault' || deviceState === 'Unresponsive' ? 0 : 20,
      charge_time: deviceState === 'Error' || deviceState === 'Tripped' || deviceState === 'fault' || deviceState === 'Unresponsive' ? 0 : 75,
    })
  }

  toggleDeviceVisibility() {
    this.deviceVisibile = !this.deviceVisibile;
  }

  deviceInfo(stateChange: number, deviceInfo: any) {
    // we are toggling a switch when state is 2
    // we are clicking on the body of the card when stae is 1
    if(stateChange === 2) {
      this.toggleWasDone = true;
    } else if (stateChange === 1 && !this.toggleWasDone) {
      this.currentDeviceInfo = this.devicesInfo.find((element) => element.uuid === deviceInfo.uuid)
      this.toggleDeviceVisibility();
    } else {
      this.toggleWasDone = false;
    }

  }
}
