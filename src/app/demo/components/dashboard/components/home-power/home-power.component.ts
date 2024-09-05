import { Component, Input, OnInit } from '@angular/core';
import { GridStateValue, HomeSummary } from 'src/app/demo/api/home';
import { HomeService } from 'src/app/demo/service/home.service';

@Component({
  selector: 'app-home-power',
  standalone: false,
  templateUrl: './home-power.component.html',
  styleUrl: './home-power.component.scss'
})
export class HomePowerComponent implements OnInit {
  @Input() homeSummary: HomeSummary;
  gridValue = GridStateValue;
  constructor() {}
  
  ngOnInit(): void {}
}
