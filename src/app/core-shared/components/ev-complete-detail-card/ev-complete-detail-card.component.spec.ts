import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvCompleteDetailCardComponent } from './ev-complete-detail-card.component';

describe('EvCompleteDetailCardComponent', () => {
  let component: EvCompleteDetailCardComponent;
  let fixture: ComponentFixture<EvCompleteDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvCompleteDetailCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvCompleteDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
