import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceInfoCardComponent } from './components/device-info-card/device-info-card.component';
import { SidebarModule } from 'primeng/sidebar';
import { BreakerInfoComponent } from './components/breaker-info/breaker-info.component';
import { EvInfoComponent } from './components/ev-info/ev-info.component';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [DeviceInfoCardComponent, BreakerInfoComponent, EvInfoComponent],
  imports: [CommonModule, SidebarModule, ChipModule, ButtonModule],
  exports: [DeviceInfoCardComponent]
})
export class CoreSharedModule { }
