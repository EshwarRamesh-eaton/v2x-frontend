import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakerTurnOffDialogComponent } from './breaker-turn-off-dialog.component';

describe('BreakerTurnOffDialogComponent', () => {
  let component: BreakerTurnOffDialogComponent;
  let fixture: ComponentFixture<BreakerTurnOffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakerTurnOffDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreakerTurnOffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
