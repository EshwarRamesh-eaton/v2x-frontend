import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription, timestamp } from 'rxjs';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent implements OnInit { 
    products: any[] = [
        {mode: 'V2H', timestamp: '05/12/2024 5:15pm EST', user: 'Admin'},
        {mode: 'V2G', timestamp: '05/12/2024 5:00pm EST', user: 'Admin'},
        {mode: 'V2H', timestamp: '05/12/2024 4:29pm EST', user: 'Admin'},
        {mode: 'V2G', timestamp: '05/12/2024 4:05pm EST', user: 'Admin'},
        {mode: 'V2G', timestamp: '05/12/2024 4:05pm EST', user: 'Admin'},
        {mode: 'V2G', timestamp: '05/12/2024 4:05pm EST', user: 'Admin'},
    ];
    items = [{label: 'Open'}, {label: 'Closed'}]

    
    data: any;
        
    options: any;
    
    @ViewChild('chart', { read: ViewContainerRef }) chart;

    ngOnInit(): void {    
        this.chartInit();
    }
        
    chartInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['Fan', 'Light', 'Room Bulb', 'Compressor'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Grid',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48]
                },
                {
                    type: 'bar',
                    label: 'Vehicle',
                    backgroundColor: documentStyle.getPropertyValue('--blue-200'),
                    data: [21, 84, 24, 75]
                }
            ]
        };
        
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    stacked: true,
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


}
