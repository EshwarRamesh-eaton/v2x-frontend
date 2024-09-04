import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFavoritesComponent } from './device-favorites.component';

describe('DeviceFavoritesComponent', () => {
  let component: DeviceFavoritesComponent;
  let fixture: ComponentFixture<DeviceFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
