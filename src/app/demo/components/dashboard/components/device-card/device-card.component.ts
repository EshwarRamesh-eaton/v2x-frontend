import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Device } from 'src/app/demo/api/devices';

@Component({
  selector: 'app-device-card',
  standalone: false,
  templateUrl: './device-card.component.html',
  styleUrl: './device-card.component.scss'
})
export class DeviceCardComponent implements OnInit, OnDestroy {
  @Input() device: Device;
  constructor() {

  }
  ngOnInit() {}

  ngOnDestroy() {}
}
