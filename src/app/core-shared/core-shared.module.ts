import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceInfoCardComponent } from './components/device-info-card/device-info-card.component';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  declarations: [DeviceInfoCardComponent],
  imports: [CommonModule, SidebarModule],
  exports: [DeviceInfoCardComponent]
})
export class CoreSharedModule { }
