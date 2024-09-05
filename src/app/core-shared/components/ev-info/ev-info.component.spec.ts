import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvInfoComponent } from './ev-info.component';

describe('EvInfoComponent', () => {
  let component: EvInfoComponent;
  let fixture: ComponentFixture<EvInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
