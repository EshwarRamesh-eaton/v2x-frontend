import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard-component/dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { DialogService } from 'primeng/dynamicdialog';
import { EulaComponent } from './components/eula/eula.component';
import { EulaService } from '../../service/eula.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { OrderListModule } from 'primeng/orderlist';
import { HomePowerComponent } from './components/home-power/home-power.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        SelectButtonModule,
        AvatarModule,
        TagModule,
        OrderListModule,
        InputSwitchModule
    ],
    declarations: [DashboardComponent, EulaComponent, HomePowerComponent, DevicesComponent, DeviceCardComponent],
    providers: [EulaService, DialogService]
})
export class DashboardModule { }
