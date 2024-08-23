import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-battery-extension',
  standalone: false,
  templateUrl: './battery-extension.component.html',
  styleUrl: './battery-extension.component.scss'
})
export class BatteryExtensionComponent {
  @Input() show = false
  @Output() closeScreen = new EventEmitter();
}
