import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-breaker-turn-off-dialog',
  standalone: false,
  templateUrl: './breaker-turn-off-dialog.component.html',
  styleUrl: './breaker-turn-off-dialog.component.scss'
})
export class BreakerTurnOffDialogComponent implements OnInit {
  @Input() header = 'Are you sure you want to turn off this breaker?';
  @Input() message = 'This action is potentially unsafe. Ensure all connected appliances or devices are in a safe condition prior to turning off this breaker. '
  @Input() callback: () => Promise<any>;
  @Input() acceptLabel = 'Turn Off Breaker';
  @Input() rejectLabel = 'Cancel'
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
      this.confirm();
  }
  confirm() {
    this.confirmationService.confirm({
      acceptIcon: 'none',
      rejectIcon: 'none',
      acceptLabel: this.acceptLabel,
      rejectLabel: this.rejectLabel,
      acceptButtonStyleClass: 'p-button-sm custom-button-color-primary',
      rejectButtonStyleClass: 'p-button-outlined p-button-sm custom-button-color-secondary',
      accept: () => {
        return this.callback()
          .then(() => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
          })
          .catch(() => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
          });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    })
}

}
