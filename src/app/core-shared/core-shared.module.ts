import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceInfoCardComponent } from './components/device-info-card/device-info-card.component';
import { SidebarModule } from 'primeng/sidebar';
import { BreakerInfoComponent } from './components/breaker-info/breaker-info.component';
import { EvInfoComponent } from './components/ev-info/ev-info.component';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { BreakerCompleteDetailCardComponent } from './components/breaker-complete-detail-card/breaker-complete-detail-card.component';
import { EvCompleteDetailCardComponent } from './components/ev-complete-detail-card/ev-complete-detail-card.component';

@NgModule({
  declarations: [DeviceInfoCardComponent, BreakerInfoComponent, EvInfoComponent, BreakerCompleteDetailCardComponent, EvCompleteDetailCardComponent],
  imports: [CommonModule, SidebarModule, ChipModule, ButtonModule],
  exports: [DeviceInfoCardComponent, BreakerCompleteDetailCardComponent, EvCompleteDetailCardComponent]
})
export class CoreSharedModule { }
