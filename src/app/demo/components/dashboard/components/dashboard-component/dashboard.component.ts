import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Device, DeviceType } from 'src/app/demo/api/devices';
import { HomeSummary } from 'src/app/demo/api/home';
import { DeviceService } from 'src/app/demo/service/device.service';
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
    devices: Device[];
    midDevice: Device;
    sourceDevice: Device;
    deviceTypeValue = DeviceType;
    constructor(public layoutService: LayoutService, 
        private messageService: MessageService,
        private homeService: HomeService,
        private deviceService: DeviceService
       ) { }

    ngOnInit() {
        this.getHomeSummary();
        this.getDevices();
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

      getDevices() {
        this.deviceService.getDevices()
        .then((resp) => {
          this.devices = resp;
        }).catch(() => {
          // TODO: Add errors here
          this.devices = [    
          {
            id: '4',
            uuid: 'hsjasdhjas',
            name: 'MID 1',
            isEnabled: true,
            state: 'ON',
            type: 'MID',
            critical: false
          },
          {
            id: '1',
            uuid: 'ufhmdasd',
            name: 'Garage EV Charger',
            isEnabled: true,
            state: 'ON',
            type: 'Source',
            critical: true
          },
          {
            id: '2',
            uuid: 'hasdhjas',
            name: 'Pool Pump Breaker',
            isEnabled: true,
            state: 'ON',
            type: 'Breaker',
            critical: true
          },
          {
            id: '3',
            uuid: 'hjasdhjas',
            name: 'Kitchen Breaker',
            isEnabled: true,
            state: 'OFF',
            type: 'Breaker',
            critical: false
          },
          
          {
            id: '5',
            uuid: 'sadasd',
            name: 'MID Breaker 2',
            isEnabled: false,
            state: 'OFF',
            type: 'Breaker',
            critical: false
          },
          {
            id: '6',
            uuid: 'hjhasd97',
            name: 'TDD Workshop',
            isEnabled: true,
            state: 'ON',
            type: 'Breaker',
            critical: true
          }]
          this.findMidAndSourceDevice();
        })
      }

    findMidAndSourceDevice() {
      this.devices.forEach((e) => {
        if (e.type === this.deviceTypeValue.source) {
          this.sourceDevice = e;
        } else if (e.type === this.deviceTypeValue.mid) {
          this.midDevice = e;
        }
        
      })
    }

    ngOnDestroy() {
    }
}
