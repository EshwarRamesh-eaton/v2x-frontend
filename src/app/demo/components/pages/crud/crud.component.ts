import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService]
})
export class CrudComponent implements OnInit {
    trigger: boolean = false;
    powerSupplyTrigger: boolean = false;
    dataTemp: any;
    optionsTemp: any;
    temperature: boolean = true;
    subscription: Subscription = new Subscription();
    datasetTemp = [];
    labelTemp = []
    @ViewChild('chart', { read: ViewContainerRef }) chart;
    data: TreeNode[] = [
        {
            label: 'Beaglebone Black',
            expanded: true,
            children: [
                {
                    label: 'EVSE - 1',
                    expanded: true,
                    styleClass: this.trigger ? 'bg-blue-500 text-white': '',
                },
                {
                    label: 'EVSE - 2',
                    expanded: true,
                    styleClass: !this.trigger ? 'bg-blue-500 text-white': '',
                }
            ]
        }
    ];
    constructor(private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        // this.getRelayStatus();
        this.chartTemp(true);
    }

    getRelayStatus() {
        this.productService.getRelayStatus()
        .then((resp) => {
            this.trigger = resp[0].trigger;
            this.updateTree();
        }).catch(() => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to fetch relay status. Please try later', life: 3000 });
        })
    }

    recursiveCall() {
        setInterval(() => {
            this.getTemperatureReading();
        },10000)
        
        // setInterval(() => {
        //     let currDate = new Date()
        //     let time = currDate.getHours() + ':' + currDate.getMinutes() + ':' + currDate.getSeconds()
        //     if (this.datasetTemp.length > 10) {
        //         this.datasetTemp.shift();
        //         this.labelTemp.shift();
        //     }
        //     this.datasetTemp.push(this.randomTemperatureGenerator);
        //     this.labelTemp.push(time);
        //     this.chartTemp(false)
        // },10000)
    }
    
    
    get randomTemperatureGenerator(): any {
        return Math.floor(Math.random() * (25 - 23 + 1) + 23);
    }

    chartTemp(first) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.dataTemp = {
            labels: this.labelTemp,
            datasets: [
                {
                    type: 'line',
                    label: 'Temperature',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: this.datasetTemp,
                    tension: 0.5
                }
            ]
        };
        
        this.optionsTemp = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            animation: {
                duration: 0
            },
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
        if (first) {
            this.recursiveCall();
        }
    }

    updateTree() {
        this.data = [
            {
                label: 'Beaglebone Black',
                expanded: true,
                children: [
                    {
                        label: 'EVSE - 1',
                        expanded: true,
                        styleClass: this.trigger ? 'bg-blue-500 text-white': '',
                    },
                    {
                        label: 'EVSE - 2',
                        expanded: true,
                        styleClass: !this.trigger ? 'bg-blue-500 text-white': '',
                    }
                ]
            }
        ];
    }
 
    toggleRelay() {
        const data = {
            trigger: this.trigger,
            user: 'admin'
        }
        this.productService.updateRelay(data)
        .then(() => {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'EVSE successfully changed', life: 3000 });
        }).catch(() => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'EVSE toggle failed. Please try later', life: 3000 });
        }).finally(() => {
            this.updateTree()
        })
    }

    togglePowerSupply() {
        const data = {
            trigger: this.powerSupplyTrigger
        }
        this.productService.togglePowerSupply(data)
        .then(() => {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Power Supply toggled successfully', life: 3000 });
        }).catch(() => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'power supply toggle failed. Please try later', life: 3000 });
        })
    }

    getTemperatureReading() {
        this.productService.getTemperatureReading()
        .then((resp) => {
            let currDate = new Date()
            let time = currDate.getHours() + ':' + currDate.getMinutes() + ':' + currDate.getSeconds()
            if (this.datasetTemp.length > 10) {
                this.datasetTemp.shift();
                this.labelTemp.shift();
            }
            this.datasetTemp.push(resp.temperature);
            this.labelTemp.push(time);
            this.chartTemp(false)
        }).catch(() => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cannot obtain temperature reading. Please try later', life: 3000 });
        })
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
