import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakerCompleteDetailCardComponent } from './breaker-complete-detail-card.component';

describe('BreakerCompleteDetailCardComponent', () => {
  let component: BreakerCompleteDetailCardComponent;
  let fixture: ComponentFixture<BreakerCompleteDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakerCompleteDetailCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreakerCompleteDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
