import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { HomeSummary } from '../demo/api/home';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    @Input() homeSummary: HomeSummary
    @Output() selectedMenuOption = new EventEmitter<any>();
    constructor(public el: ElementRef) { }
}

