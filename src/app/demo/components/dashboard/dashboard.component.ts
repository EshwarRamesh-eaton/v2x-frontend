import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EulaService } from '../../service/eula.service';
import { AuthService } from '../../service/auth.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: any[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    stateOptions: any[] = [{ label: 'V2G', value: 'V2G' },{ label: 'V2H', value: 'V2H' }];

    value: string = 'V2H';

    notifications = [
        {user: 'Admin', message: 'V2H Mode Enabled', time: '10:15 am'},
        {user: 'Admin', message: 'Auto Transformer Closed', time: '10:14 am'},
        {user: 'Admin', message: 'Breakers opened', time: '10:12 am'},
        {user: 'Admin', message: 'EVSE Breaker opened', time: '10:11 am'},
        {user: 'Admin', message: 'Safety Checks Performed', time: '10:10 am'}

    ]
    constructor(
        private productService: ProductService, 
        public layoutService: LayoutService, 
        private eulaService: EulaService, 
        private auth: AuthService) {
        this.subscription = this.layoutService.configUpdate$
        .pipe(debounceTime(25))
        .subscribe((config) => {
            this.initChart();
        });
        if (this.auth.eula === 'false') {
            this.eulaService.showEULA();
        }
        
    }

    ngOnInit() {
        this.initChart();
        this.products = [
            {name: 'Fan', breaker: 'Breaker 1', power: '40 kW', status: 'active'},
            {name: 'Light', breaker: 'Breaker 2', power: '60 kW', status: 'inactive'},
            {name: 'Room Bulb', breaker: 'Breaker 3', power: '10 kW', status: 'active'},
            {name: 'Compressor', breaker: 'Breaker 4', power: '1100 kW', status: 'inactive'}
        ]

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        let canvas: any = document.getElementsByTagName('canvas')
        let arr = [...canvas];
        const gradient = arr[0]?.getContext("2d")?.createLinearGradient(0, 0, 0, 600);
        gradient?.addColorStop(0,  'rgba(54, 162, 235, 0.75)');
        gradient?.addColorStop(1, 'rgba(255, 255, 255)');
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Charge Duration',
                    data: [65, 64, 67, 64, 63, 55, 67],
                    fill: true,
                    backgroundColor: gradient,
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
