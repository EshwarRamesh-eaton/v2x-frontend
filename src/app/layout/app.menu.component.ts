import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { GridStateValue, HomeSummary } from '../demo/api/home';
import { MenuItemValue } from '../demo/api/menuItems';
import { AuthService } from '../demo/service/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    @Input() homeSummary: HomeSummary;
    @Output() selectedMenuOption = new EventEmitter<any>();
    menuItem: any[] = [];
    currentYear: string;
    menuValue = MenuItemValue;
    gridState = GridStateValue;
    constructor(private authService: AuthService) { 
        this.currentYear = new Date().getFullYear().toString();
    }

    ngOnInit() {
        this.menuItem = [
            {
                label: '805 Walbridge',
                value: this.menuValue.address,
                icon: 'assets/layout/images/icons/home.svg',
            },
            {
                label: 'Home Settings',
                value: this.menuValue.home,
                icon: 'assets/layout/images/icons/cog.svg',
            },
            {
                label: 'Manage Devices',
                value: this.menuValue.manageDevices,
                icon: 'assets/layout/images/icons/manage-device.svg',
            },
            {
                label: 'Load Prioritization',
                value: this.menuValue.loadPrioritization,
                icon: 'assets/layout/images/icons/load-prioritization.svg',
            },
            {
                label: 'Outage History',
                value: this.menuValue.outageHistory,
                icon: 'assets/layout/images/icons/outage-history.svg',
            },
            {
                label: 'Account & Security',
                value: this.menuValue.account,
                icon: 'assets/layout/images/icons/user.svg',
            },
            {
                label: 'Advanced Features',
                value: this.menuValue.advancedFeatures,
                icon: 'assets/layout/images/icons/advanced-features.svg',
            },
            {
                label: 'Works With',
                value: this.menuValue.worksWith,
                icon: 'assets/layout/images/icons/works-with.svg',
            },
            {
                label: 'App Settings',
                value: this.menuValue.appSettings,
                icon: 'assets/layout/images/icons/app-settings.svg',
            },
            {
                label: 'Help & Support',
                value: this.menuValue.helpSupport,
                icon: 'assets/layout/images/icons/help.svg',
            },
            {
                label: 'Feedback',
                value: this.menuValue.feedback,
                icon: 'assets/layout/images/icons/feedback.svg',
            },
            {
                label: 'Logout',
                value: this.menuValue.logout,
                icon: 'assets/layout/images/icons/logout.svg',
            }

            
        ]
    }

    menuOptionSelection(value: any) {
        if (value === this.menuValue.logout) {
            this.authService.logout();
        } else {
            this.selectedMenuOption.emit(value);
        }
        
    }
}
