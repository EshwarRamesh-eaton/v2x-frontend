import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';

@NgModule({
    imports: [
        CommonModule,
        EmptyDemoRoutingModule,
        MenuModule,
        TableModule,
        TagModule,
        ChartModule
    ],
    declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
