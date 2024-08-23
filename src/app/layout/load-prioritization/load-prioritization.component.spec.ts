import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { LoadPrioritizationComponent } from './load-prioritization.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';

fdescribe('LoadPrioritizationComponent', () => {
  let component: LoadPrioritizationComponent;
  let fixture: ComponentFixture<LoadPrioritizationComponent>;
  let breakersSample =  [
    {
      critical: false,
      name: 'Refrigirator',
      uuid: 'asdsd',
      priority: 1,
      loadPower: 10,
      current: 20,
      voltage: 220,
      timestamp: null,
      remoteContactState: true,
      tripState: false,
      tripReason: ''
    },
    {
      critical: false,
      name: 'Water Heater',
      uuid: 'asdsd',
      priority: 2,
      loadPower: 10,
      current: 20,
      voltage: 220,
      timestamp: null,
      remoteContactState: true,
      tripState: false,
      tripReason: ''
    },
    {
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
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPrioritizationComponent ],
      imports: [AppModule, AppLayoutModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadPrioritizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // setting mock breaker data array
    component.breakers = breakersSample;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change priority based on current index and previous index', fakeAsync(() => {
    expect(component.breakers).toEqual(breakersSample)
    const event: any = {previousIndex: 0, currentIndex: 2}
    component.drop(event);
    expect(component.breakers).not.toEqual([
      {
        critical: false,
        name: 'Refrigirator',
        uuid: 'asdsd',
        priority: 1,
        loadPower: 10,
        current: 20,
        voltage: 220,
        timestamp: null,
        remoteContactState: true,
        tripState: false,
        tripReason: ''
      },
      {
        critical: false,
        name: 'Water Heater',
        uuid: 'asdsd',
        priority: 2,
        loadPower: 10,
        current: 20,
        voltage: 220,
        timestamp: null,
        remoteContactState: true,
        tripState: false,
        tripReason: ''
      },
      {
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
    ])
    expect(component.breakers[0]).not.toEqual({
      critical: false,
      name: 'Refrigirator',
      uuid: 'asdsd',
      priority: 1,
      loadPower: 10,
      current: 20,
      voltage: 220,
      timestamp: null,
      remoteContactState: true,
      tripState: false,
      tripReason: ''
    })
  }))

});
