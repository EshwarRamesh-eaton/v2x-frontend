import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryComponent } from './home-summary.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';

fdescribe('HomeSummaryComponent', () => {
  let component: HomeSummaryComponent;
  let fixture: ComponentFixture<HomeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryComponent],
      imports: [AppModule, AppLayoutModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
