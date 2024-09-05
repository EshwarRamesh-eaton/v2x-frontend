import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/demo/api/devices';

@Component({
  selector: 'app-device-card',
  standalone: false,
  templateUrl: './device-card.component.html',
  styleUrl: './device-card.component.scss'
})
export class DeviceCardComponent implements OnInit, OnDestroy {
  @Input() device: Device;
  @Output() showInfo = new EventEmitter<any>();
  constructor() {

  }
  ngOnInit() {}

  toggleInputSwitch(state: number) {
   this.showInfo.emit(state);
  }

  ngOnDestroy() {}
}
