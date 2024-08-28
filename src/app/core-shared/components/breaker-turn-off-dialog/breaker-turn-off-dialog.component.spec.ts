import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakerTurnOffDialogComponent } from './breaker-turn-off-dialog.component';
import { AppModule } from 'src/app/app.module';
import { CoreSharedModule } from '../../core-shared.module';
import { ConfirmationService } from 'primeng/api';
import { DebugElement } from '@angular/core';

fdescribe('BreakerTurnOffDialogComponent', () => {
  let component: BreakerTurnOffDialogComponent;
  let fixture: ComponentFixture<BreakerTurnOffDialogComponent>;
  let debugElement: DebugElement;
  let confirmationService: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreakerTurnOffDialogComponent],
      imports: [AppModule, CoreSharedModule],
      providers: [ConfirmationService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreakerTurnOffDialogComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    confirmationService = debugElement.injector.get(ConfirmationService)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call confirm dialog', () => {
    spyOn(component, 'confirm');
    component.ngOnInit();
    expect(component.confirm).toHaveBeenCalled();
  })

  xit('should call accept when confirm dialog is called', () => {
    spyOn(confirmationService, 'confirm').and.callFake((confirmation: any) => { return confirmation.accept(); });
    spyOn(component, 'callback')
    component.confirm();
    expect(confirmationService.confirm).toHaveBeenCalled();
    expect(component.callback).toHaveBeenCalled();
  })
});
