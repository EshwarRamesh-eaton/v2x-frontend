import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DeviceService } from 'src/app/demo/service/device.service';

@Component({
  selector: 'app-device-complete-info',
  standalone: false,
  templateUrl: './device-complete-info.component.html',
  styleUrl: './device-complete-info.component.scss'
})
export class DeviceCompleteInfoComponent implements OnChanges {
  @Input() show = false;
  @Input() deviceInfo: any;
  style = {'background': 'radial-gradient(64.78% 65.16% at 3.43% 100%, #F97461 0%, rgba(202, 60, 61, 0.35) 69.84%), radial-gradient(100% 82.89% at 100% 0%, #F4956D 0%, rgba(255, 132, 63, 0.00) 100%), #CA3C3D', 'height': '239px' }
  constructor(private deviceService: DeviceService) {}

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['deviceInfo']) {
        this.deviceInfo = changes['deviceInfo'].currentValue;
        if (this.deviceInfo.type === 'EV') {
          this.setEvStyle()
        } else {
          this.setBreakerStyle()          
        }
      }
  }


  setEvStyle() {
    if (this.deviceInfo.status === 'Unplugged' || this.deviceInfo.status === 'Unresponsive') {
      this.style = {'background': 'radial-gradient(74.9% 86.41% at 98.53% -1.23%, rgba(0, 0, 0, 0.15) 36.5%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(86.98% 62.32% at 0% 100%, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.00) 100%), #3C474D', 'height': '239px' }
    } else if (this.deviceInfo.status === 'Plugged In') {
      this.style = {'background': 'radial-gradient(76.57% 51.5% at 0% 100%, rgba(242, 183, 65, 0.60) 0%, rgba(242, 183, 65, 0.00) 100%), radial-gradient(100% 82.89% at 100% 0%, rgba(242, 183, 65, 0.64) 0%, rgba(242, 183, 65, 0.00) 100%), #C87B03', 'height': '239px' }
    } else if (this.deviceInfo.status === 'Preparing' || this.deviceInfo.status === 'Charging') {
      this.style = {'background': 'radial-gradient(121.28% 56.25% at 16.45% 100%, rgba(43, 115, 224, 0.60) 0%, rgba(191, 203, 115, 0.00) 100%), radial-gradient(100% 82.89% at 100% 0%, rgba(7, 225, 255, 0.94) 0%, rgba(0, 192, 88, 0.00) 100%), #0068B3', 'height': '239px' }
    } else if (this.deviceInfo.status === 'Charged') {
      this.style = {'background': 'radial-gradient(121.28% 56.25% at 16.45% 100%, rgba(43, 115, 224, 0.60) 0%, rgba(191, 203, 115, 0.00) 100%), radial-gradient(100% 82.89% at 100% 0%, rgba(7, 225, 255, 0.94) 0%, rgba(0, 192, 88, 0.00) 100%), #0068B3', 'height': '239px' }
    } else {
      this.style = {'background': 'radial-gradient(64.78% 65.16% at 3.43% 100%, #F97461 0%, rgba(202, 60, 61, 0.35) 69.84%), radial-gradient(100% 82.89% at 100% 0%, #F4956D 0%, rgba(255, 132, 63, 0.00) 100%), #CA3C3D', 'height': '239px' }
    }
  }

  setBreakerStyle() {
    if (this.deviceInfo.status === 'OFF') {
      this.style = {'background': 'radial-gradient(74.9% 86.41% at 98.53% -1.23%, rgba(0, 0, 0, 0.15) 36.5%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(86.98% 62.32% at 0% 100%, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.00) 100%), #3C474D', 'height': '239px' }
    } else if (this.deviceInfo.status === 'ON') {
      this.style = {'background': 'radial-gradient(121.28% 56.25% at 16.45% 100%, rgba(43, 115, 224, 0.60) 0%, rgba(191, 203, 115, 0.00) 100%), radial-gradient(100% 82.89% at 100% 0%, rgba(7, 225, 255, 0.94) 0%, rgba(0, 192, 88, 0.00) 100%), #0068B3', 'height': '239px' }
    } else {
      this.style = {'background': 'radial-gradient(64.78% 65.16% at 3.43% 100%, #F97461 0%, rgba(202, 60, 61, 0.35) 69.84%), radial-gradient(100% 82.89% at 100% 0%, #F4956D 0%, rgba(255, 132, 63, 0.00) 100%), #CA3C3D', 'height': '239px' }
    }
  }

  closeScreen() {
    this.show = false
    this.deviceService.showInfoVariable(false);
  }
}
