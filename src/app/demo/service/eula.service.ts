import { EulaComponent } from '../components/dashboard/components/eula/eula.component';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EulaService {
  eulaRef!: DynamicDialogRef;
  modalStatus = false;
  constructor(private authService: AuthService, private dialog: DialogService) { }

  get modalOpen() {
    return this.modalStatus;
  }

  accept() {
    this.authService.updateEula()
    .then(() => {
      this.authService.setEula('true');
    }).catch(() => {
      this.authService.setEula('false');
      this.authService.logout(true);
    })
    
  }

  async reject() {
    await this.authService.logout(true);
  }

  showEULA() {
    this.modalStatus = true;
    this.eulaRef = this.dialog.open(EulaComponent, {
      header: 'Eaton Corporation - End User License Agreement',
      closable: false,
      closeOnEscape: false,
      modal: true,
      width: '70%'
    });
    this.eulaRef.onClose.subscribe(async (accepted) => {
      this.modalStatus = false;
      if (accepted) {
        await this.accept();
      } else {
        await this.reject();
      }
    });
  }
}
