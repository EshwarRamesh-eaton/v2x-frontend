import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Breakers } from 'src/app/demo/api/breakers';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BreakerService } from 'src/app/demo/service/breaker.service';
import { MessageService } from 'primeng/api';

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
  constructor(private breakerService: BreakerService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getBreakers();
  }

  getBreakers() {
    this.breakerService.getBreakers()
    .then((resp) => {
      this.breakers = resp;
    }).catch(() => {
      // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Cannot get breakers at the moment. Please try again later', life: 10000 })
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    this.disableButton = false;
    moveItemInArray(this.breakers, event.previousIndex, event.currentIndex);
    this.breakers.forEach((e, idx) => {
      e.priority = idx + 1;
    })
  }

  updatePriority() {
    this.breakers.forEach((e) => {
      const breakerPriority = {
        uuid: e.uuid,
        name: e.name,
        priority: e.priority
      }
      this.breakerService.updateBreakerPriority(breakerPriority)
      .then(() => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Priority updated successfully', life: 3000 });
      }).catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Cannot update priority at the moment. Please try again later', life: 3000 });
      })
    })
    
    
    this.disableButton = true;
  }
}
