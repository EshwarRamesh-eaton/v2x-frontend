import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeSourceRemaining } from 'src/app/demo/api/home';

@Component({
  selector: 'app-battery-extension',
  standalone: false,
  templateUrl: './battery-extension.component.html',
  styleUrl: './battery-extension.component.scss'
})
export class BatteryExtensionComponent {
  @Input() show = false
  @Output() closeScreen = new EventEmitter();


  // TODO: The timeremaining needs to be converted into hrs and mins - see what backedn will give here
  // TODO: Get real data see which model pertains to this section 
}
