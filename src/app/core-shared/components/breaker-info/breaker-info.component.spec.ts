import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakerInfoComponent } from './breaker-info.component';

describe('BreakerInfoComponent', () => {
  let component: BreakerInfoComponent;
  let fixture: ComponentFixture<BreakerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakerInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreakerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
