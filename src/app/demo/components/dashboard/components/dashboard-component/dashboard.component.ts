import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HomeSummary } from 'src/app/demo/api/home';
import { HomeService } from 'src/app/demo/service/home.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    homeSummary: HomeSummary;
    chartData: any;
    chartOptions: any;
    constructor(public layoutService: LayoutService, 
        private messageService: MessageService,
        private homeService: HomeService
       ) { }

    ngOnInit() {
        this.getHomeSummary();
    }

    getHomeSummary() {
        this.homeService.getHomeSummary()
        .then((resp) => {
          this.homeSummary = resp;
        }).catch(() => {
          this.homeSummary = {
            homeState: 'CONNECTED',
            gridState: 'PRESENT',
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
                stateOfCharge: 9, // TODO: What value should this be for the notification to show up
              }
            ]
          }
        })
      }

    ngOnDestroy() {
    }
}
