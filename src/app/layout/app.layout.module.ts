import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './top-bar/app.topbar.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppLayoutComponent } from "./layout/app.layout.component";
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';
import { LoadPrioritizationComponent } from './load-prioritization/load-prioritization.component';
import { LoadPrioritizationCardComponent } from './load-prioritization-card/load-prioritization-card.component';
import { SubMenuHeaderComponent } from './sub-menu-header/sub-menu-header.component';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BatteryExtensionComponent } from './battery-extension/battery-extension.component';
import { BatteryRemainingTimeCardComponent } from './battery-remaining-time-card/battery-remaining-time-card.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ExtendBatteryLifeNotificationComponent } from './extend-battery-life-notification/extend-battery-life-notification.component';
import { CoreSharedModule } from '../core-shared/core-shared.module';
import { DeviceCompleteInfoComponent } from './device-complete-info/device-complete-info.component';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
        MobileFooterComponent,
        HomeSummaryComponent,
        LoadPrioritizationComponent,
        LoadPrioritizationCardComponent,
        SubMenuHeaderComponent,
        BatteryExtensionComponent,
        BatteryRemainingTimeCardComponent,
        ExtendBatteryLifeNotificationComponent,
        DeviceCompleteInfoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        MenuModule,
        ToolbarModule,
        ButtonModule,
        DragDropModule,
        CheckboxModule,
        CoreSharedModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
