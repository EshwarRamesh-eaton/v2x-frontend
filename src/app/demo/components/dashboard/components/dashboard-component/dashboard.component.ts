import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ProductService } from '../../../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EulaService } from '../../../../service/eula.service';
import { AuthService } from '../../../../service/auth.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    chartData: any;
    chartOptions: any;
    constructor(public layoutService: LayoutService, private messageService: MessageService,
       ) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
