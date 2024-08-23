import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GridStateValue, HomeSourceRemaining, HomeSummary } from 'src/app/demo/api/home';

@Component({
  selector: 'app-extend-battery-life-notification',
  standalone: false,
  templateUrl: './extend-battery-life-notification.component.html',
  styleUrl: './extend-battery-life-notification.component.scss'
})
export class ExtendBatteryLifeNotificationComponent {
  @Input() sourceRemaining: HomeSourceRemaining;
  @Input() homeSummary: HomeSummary;
  @Output() showBatteryPage = new EventEmitter<any>();
  gridState = GridStateValue;
  constructor() {}

  navToBatteryExtensionPage() {
    this.showBatteryPage.emit();
  }
}
