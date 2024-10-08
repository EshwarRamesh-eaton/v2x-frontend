import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { DeviceType } from 'src/app/demo/api/devices';

@Component({
  selector: 'app-device-info-card',
  standalone: false,
  templateUrl: './device-info-card.component.html',
  styleUrl: './device-info-card.component.scss'
})
export class DeviceInfoCardComponent {
@Input() visibility = false;
@Input() style = {'height': 'auto', 'padding': '0', 'background-color': 'transparent'}
// TODO: We do not have any modals defined for this. Need to check how this will be defined.
@Input() deviceDetails: any = {name: 'Garage EV Charger', status: 'Charging', power: 120, total_current: 20, current: 10, load_on_breaker: 45, type: 'EV'};
@Output() closeScreen = new EventEmitter();
deviceTypeValue = DeviceType

constructor() {}

changeVisibility() {
  this.visibility = false;
  this.closeScreen.emit();
}
}
