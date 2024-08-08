import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
  selector: 'app-mobile-footer',
  standalone: false,
  templateUrl: './mobile-footer.component.html',
  styleUrl: './mobile-footer.component.scss'
})
export class MobileFooterComponent {
 // 1 is home, 2 is energy, 3 is schedules, 4 is scenes
  selectedOption = 1;
  constructor(public layoutService: LayoutService) {
   }

   navToHome() {
    this.selectedOption = 1;
   }

   navToEnergy() {
    this.selectedOption = 2;
   }
   
   navToSchedules() {
    this.selectedOption = 3;
   }

   navToScenes() {
    this.selectedOption = 4;
   }
}
