import { Component, Input } from '@angular/core';
import { Breakers } from 'src/app/demo/api/breakers';

@Component({
  selector: 'app-load-prioritization-card',
  standalone: false,
  templateUrl: './load-prioritization-card.component.html',
  styleUrl: './load-prioritization-card.component.scss'
})
export class LoadPrioritizationCardComponent {
  @Input() breaker: Breakers
}
