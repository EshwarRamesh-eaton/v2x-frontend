import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPrioritizationCardComponent } from './load-prioritization-card.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';

fdescribe('LoadPrioritizationCardComponent', () => {
  let component: LoadPrioritizationCardComponent;
  let fixture: ComponentFixture<LoadPrioritizationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadPrioritizationCardComponent],
      imports: [AppModule, AppLayoutModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadPrioritizationCardComponent);
    component = fixture.componentInstance;
    component.breaker = {
      critical: false,
      name: 'Garrage Lights',
      uuid: 'asdsd',
      priority: 3,
      loadPower: 10,
      current: 20,
      voltage: 220,
      timestamp: null,
      remoteContactState: true,
      tripState: false,
      tripReason: ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
