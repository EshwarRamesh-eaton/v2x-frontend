import { Component } from '@angular/core';
import { Device } from 'src/app/demo/api/devices';

@Component({
  selector: 'app-devices',
  standalone: false,
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent {
  devices: Device[] = [
    {
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
      type: 'breaker',
      critical: true
    },
    {
      uuid: 'hjasdhjas',
      name: 'Kitchen Breaker',
      isEnabled: true,
      state: false,
      type: 'breaker',
      critical: false
    },
    {
      uuid: 'hjasdhjas',
      name: 'MID Breaker',
      isEnabled: false,
      state: false,
      type: 'breaker',
      critical: false
    },
    {
      uuid: 'sadasd',
      name: 'MID Breaker 2',
      isEnabled: false,
      state: false,
      type: 'breaker',
      critical: false
    },
    {
      uuid: 'ufhmdasd',
      name: 'TDD Workshop',
      isEnabled: true,
      state: true,
      type: 'breaker',
      critical: true
    },
  ];
  activeIndex = 1
  checked = false;
  constructor() {}
}
