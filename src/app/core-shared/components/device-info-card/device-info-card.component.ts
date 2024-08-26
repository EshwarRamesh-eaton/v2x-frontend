import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-device-info-card',
  standalone: false,
  templateUrl: './device-info-card.component.html',
  styleUrl: './device-info-card.component.scss'
})
export class DeviceInfoCardComponent {
@Input() visibility = false;
@Input() imagePath = 'assets/demo/images/eaton/breaker.svg';
@Input() header = '';
@Input() style = {'height': 'auto', 'padding': '0', 'background-color': 'transparent'}
// TODO: We do not have any modals defined for this. Need to check how this will be defined.
@Input() deviceDetails: any = {power: 120, total_current: 20, load_on_breaker: 45}
}
