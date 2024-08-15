import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPrioritizationCardComponent } from './load-prioritization-card.component';

describe('LoadPrioritizationCardComponent', () => {
  let component: LoadPrioritizationCardComponent;
  let fixture: ComponentFixture<LoadPrioritizationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadPrioritizationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadPrioritizationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
