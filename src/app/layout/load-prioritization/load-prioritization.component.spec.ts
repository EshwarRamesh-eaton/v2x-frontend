import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPrioritizationComponent } from './load-prioritization.component';

describe('LoadPrioritizationComponent', () => {
  let component: LoadPrioritizationComponent;
  let fixture: ComponentFixture<LoadPrioritizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadPrioritizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadPrioritizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
