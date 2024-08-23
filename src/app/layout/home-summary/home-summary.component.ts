import { Component, Input } from '@angular/core';
import { GridStateValue, HomeSummary } from 'src/app/demo/api/home';

@Component({
  selector: 'app-home-summary',
  standalone: false,
  templateUrl: './home-summary.component.html',
  styleUrl: './home-summary.component.scss'
})
export class HomeSummaryComponent {
  @Input() homeSummary: HomeSummary;
  gridState = GridStateValue;
}
