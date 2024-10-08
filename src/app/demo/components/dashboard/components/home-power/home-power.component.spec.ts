import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePowerComponent } from './home-power.component';
import { AppModule } from 'src/app/app.module';
import { DashboardModule } from '../../dashboard.module';

fdescribe('HomePowerComponent', () => {
  let component: HomePowerComponent;
  let fixture: ComponentFixture<HomePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePowerComponent ],
      imports: [AppModule, DashboardModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
