import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HomeSummary } from '../demo/api/home';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    @Input() homeSummary: HomeSummary;
    menuItem: any[] = [];
    currentYear: string;
    constructor() { 
        this.currentYear = new Date().getFullYear().toString();
    }

    ngOnInit() {
        this.menuItem = [
            {
                label: '805 Walbridge',
                icon: 'assets/layout/images/icons/home.svg',
                routerLink: ['']
            },
            {
                label: 'Home Settings',
                icon: 'assets/layout/images/icons/cog.svg',
                routerLink: ['']
            },
            {
                label: 'Manage Devices',
                icon: 'assets/layout/images/icons/manage-device.svg',
                routerLink: ['']
            },
            {
                label: 'Load Prioritization',
                icon: 'assets/layout/images/icons/load-prioritization.svg',
                routerLink: ['']
            },
            {
                label: 'Outage History',
                icon: 'assets/layout/images/icons/outage-history.svg',
                routerLink: ['']
            },
            {
                label: 'Account & Security',
                icon: 'assets/layout/images/icons/user.svg',
                routerLink: ['']
            },
            {
                label: 'Advanced Features',
                icon: 'assets/layout/images/icons/advanced-features.svg',
                routerLink: ['']
            },
            {
                label: 'Works With',
                icon: 'assets/layout/images/icons/works-with.svg',
                routerLink: ['']
            },
            {
                label: 'App Settings',
                icon: 'assets/layout/images/icons/app-settings.svg',
                routerLink: ['']
            },
            {
                label: 'Help & Support',
                icon: 'assets/layout/images/icons/help.svg',
                routerLink: ['']
            },
            {
                label: 'Feedback',
                icon: 'assets/layout/images/icons/feedback.svg',
                routerLink: ['']
            }

            
        ]
    }
}
