import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/core/dashboard'] }
                ]
            },
           
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Configuration',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: ['/core/pages/crud']
                    },
                    {
                        label: 'System',
                        icon: 'pi pi-fw pi-desktop',
                        routerLink: ['/core/pages/empty']
                    },
                    {
                        label: 'Firmware Update',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/core/pages/timeline']
                    }  
                ]
            }
        ];
    }
}
