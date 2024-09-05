import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-menu-header',
  standalone: false,
  templateUrl: './sub-menu-header.component.html',
  styleUrl: './sub-menu-header.component.scss'
})
export class SubMenuHeaderComponent {
  @Input() header = '';
  @Input() backButton = true;
  @Input() deviceCard = false;
  @Input() deviceType = 'Breaker';
  @Input() sideMenu = false;
  @Input() icon = false;
  @Input() style = {'background': '#2B353A', 'height': '100px'}
  @Output() closeScreen = new EventEmitter();
  constructor() {}

  changeVisibility() {
    this.closeScreen.emit();
  }
}
