import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Breakers } from 'src/app/demo/api/breakers';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-load-prioritization',
  standalone: false,
  templateUrl: './load-prioritization.component.html',
  styleUrl: './load-prioritization.component.scss'
})
export class LoadPrioritizationComponent implements OnInit{
  @Input() show = false
  @Output() closeScreen = new EventEmitter();
  breakers: Breakers[] = [
    {
      critical: false,
      name: 'Refrigirator',
      uuid: 'asdsd',
      priority: 1,
      loadPower: 10,
      current: 20,
      voltage: 220,
      timestamp: null,
      remoteContactState: true,
      tripState: false,
      tripReason: ''
    },
    {
      critical: false,
      name: 'Water Heater',
      uuid: 'asdsd',
      priority: 2,
      loadPower: 10,
      current: 20,
      voltage: 220,
      timestamp: null,
      remoteContactState: true,
      tripState: false,
      tripReason: ''
    },
    {
      critical: false,
      name: 'Garrage Lights',
      uuid: 'asdsd',
      priority: 3,
      loadPower: 10,
      current: 20,
      voltage: 220,
      timestamp: null,
      remoteContactState: true,
      tripState: false,
      tripReason: ''
    }
  ];
  disableButton = true;
  showDeviceDetails = false;
  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    this.disableButton = false;
    moveItemInArray(this.breakers, event.previousIndex, event.currentIndex);
    this.breakers.forEach((e, idx) => {
      e.priority = idx + 1;
    })
  }

  updatePriority() {
    this.disableButton = true;
  }
}
