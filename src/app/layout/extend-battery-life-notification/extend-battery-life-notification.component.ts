import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { GridStateValue, HomeSourceRemaining, HomeSummary } from 'src/app/demo/api/home';

@Component({
  selector: 'app-extend-battery-life-notification',
  standalone: false,
  templateUrl: './extend-battery-life-notification.component.html',
  styleUrl: './extend-battery-life-notification.component.scss'
})
export class ExtendBatteryLifeNotificationComponent implements OnChanges {
  @Input() sourceRemaining: HomeSourceRemaining;
  @Input() homeSummary: HomeSummary;
  @Output() showBatteryPage = new EventEmitter<any>();
  gridState = GridStateValue;
  showNotification = false;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['homeSummary']) {
        this.homeSummary = changes['homeSummary'].currentValue;
        if (this.homeSummary.gridState === this.gridState.lost) {
          setTimeout(() => {
            this.showNotification = true;
          }, 60000)
        } else {
          this.showNotification = false;
        }
      }
  }

  navToBatteryExtensionPage() {
    this.showBatteryPage.emit();
  }
}
