import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Device, DeviceStateValue, DeviceType } from 'src/app/demo/api/devices';
import { GridStateValue, HomeSummary } from 'src/app/demo/api/home';
import { DeviceService } from 'src/app/demo/service/device.service';

@Component({
  selector: 'app-devices',
  standalone: false,
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent implements OnInit, OnChanges {
  @Input() devices: Device[];
  devicesInfo: any = [];
  currentDeviceInfo: any;
  activeIndex = 1
  checked = false;
  deviceVisibile = false;
  toggleWasDone = false;
  @Input() homeSummary: HomeSummary;
  gridValue = GridStateValue;
  deviceTypeValue = DeviceType;
  deviceStateValue = DeviceStateValue
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['devices']) {
        this.devices = changes['devices'].currentValue;
        if (this.devices?.length > 0) {
          this.devices?.forEach((device) => {
            this.getDeviceInfo(device)
          })
        }
       
      }
      if (changes['homeSummary']) {
        this.homeSummary = changes['homeSummary'].currentValue;
      }
  }
  

  getDeviceInfo(device: Device) {
    // TODO: This call is yet to be designed so we are creating data here. This will be replaced with actual device data
    const evState = ['Unplugged', 'Plugged In', 'Preparing', 'Charging', 'Charged', 'Error', 'Fault', 'Tripped', 'Unresponsive']
    // const deviceState = evState[Math.floor(Math.random() * (8 - 0 + 1) + 0)];
    const deviceState = evState[0]
    this.devicesInfo.push({
      uuid: device.uuid,
      name: device.name,
      type: device.type,
      state: device.state,
      status: device.type === this.deviceTypeValue.breaker && device.state === this.deviceStateValue.on ? this.deviceStateValue.on : device.type === this.deviceTypeValue.breaker && device.state === this.deviceStateValue.off ? this.deviceStateValue.off : device.type === this.deviceTypeValue.source ? deviceState : '',
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

  deviceInfo(stateChange: number, device: any) {
    // we are toggling a switch when state is 2
    // we are clicking on the body of the card when state is 1
    if(stateChange === 2) {
      this.toggleWasDone = true;
    } else if (stateChange === 1 && !this.toggleWasDone) {
      // ideally latest device information will already be here but for now lets update the device info to match what the card has
      this.currentDeviceInfo = this.devicesInfo.find((element) => element.uuid === device.uuid)
      // this can be removed later (only thing that can be updated is the state)
      this.currentDeviceInfo.state = device.state
      this.toggleDeviceVisibility();
    } else {
      this.toggleWasDone = false;
    }

  }
}
