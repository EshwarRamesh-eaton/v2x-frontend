import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceInfoCardComponent } from './components/device-info-card/device-info-card.component';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BreakerTurnOffDialogComponent } from './components/breaker-turn-off-dialog/breaker-turn-off-dialog.component';



@NgModule({
  declarations: [DeviceInfoCardComponent, BreakerTurnOffDialogComponent],
  imports: [CommonModule, SidebarModule, ConfirmDialogModule],
  exports: [DeviceInfoCardComponent, BreakerTurnOffDialogComponent]
})
export class CoreSharedModule { }
