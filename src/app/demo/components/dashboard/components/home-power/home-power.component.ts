import { Component, OnInit } from '@angular/core';
import { GridStateValue, HomeSummary } from 'src/app/demo/api/home';
import { HomeService } from 'src/app/demo/service/home.service';

@Component({
  selector: 'app-home-power',
  standalone: false,
  templateUrl: './home-power.component.html',
  styleUrl: './home-power.component.scss'
})
export class HomePowerComponent implements OnInit {
  homeSummary: HomeSummary;
  gridValue = GridStateValue;
  constructor(private homeService: HomeService) {}
  
  ngOnInit(): void {
      this.getHomeSummary();
  }

  
  getHomeSummary() {
    this.homeService.getHomeSummary()
    .then((resp) => {
      this.homeSummary = resp;
    }).catch(() => {
      this.homeSummary = {
        homeState: 'CONNECTED',
        gridState: 'LOST',
        breakersInUse: 10,
        breakersTotal: 12,
        dailyUsage: 15,
        devicesInUse: 10,
        devicesTotal: 12,
        sourcesRemaining: [
          {
            source: {
              id: 'asds',
              name: 'V2H',
              type: 'BATTERY',
              minimumCharge: 80,
            },
            timeRemaining: 8,
            stateOfCharge: 12, // TODO: What value should this be for the notification to show up
          }
        ]
      }
    })
  }
}
