import { Component, ElementRef, Input } from '@angular/core';
import { HomeSummary } from '../demo/api/home';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    @Input() homeSummary: HomeSummary
    constructor(public el: ElementRef) { }
}

