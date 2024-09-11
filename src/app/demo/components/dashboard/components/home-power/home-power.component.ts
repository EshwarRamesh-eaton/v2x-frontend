import { Component, Input, OnInit } from '@angular/core';
import { Device, DeviceStateValue } from 'src/app/demo/api/devices';
import { GridStateValue, HomeSummary } from 'src/app/demo/api/home';
import { HomeService } from 'src/app/demo/service/home.service';

@Component({
  selector: 'app-home-power',
  standalone: false,
  templateUrl: './home-power.component.html',
  styleUrl: './home-power.component.scss'
})
export class HomePowerComponent implements OnInit {
  @Input() homeSummary: HomeSummary;
  @Input() sourceDevice: Device;
  @Input() midDevice: Device;
  gridValue = GridStateValue;
  deviceStateValue = DeviceStateValue;
  constructor() {}
  
  ngOnInit(): void {}
}
