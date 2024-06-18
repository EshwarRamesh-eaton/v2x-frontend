import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '../demo/service/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private authService: AuthService) { }
    ngOnInit(): void {
        this.populateItems();
      }

    populateItems() {
        this.items = [
          {
            label: 'Log Out',
            icon: 'pi pi-sign-out',
            command: this.logOut
          }
        ];
      }

      logOut = async () => {
        await this.authService.logout();
      }
}
