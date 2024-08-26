import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EulaComponent } from './eula.component';
import { AppModule } from 'src/app/app.module';
import { DashboardModule } from '../../dashboard.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { By } from '@angular/platform-browser';

fdescribe('EulaComponent', () => {
  let component: EulaComponent;
  let fixture: ComponentFixture<EulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EulaComponent],
      imports: [AppModule, DashboardModule],
      providers: [DynamicDialogRef]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call accept function when accept button is pressed', () => {
    spyOn(component, 'accept');
    let divElement = fixture.debugElement.query(By.css('#accept'));
    divElement.nativeElement.click()
    expect(component.accept).toHaveBeenCalled()
  })

  it('should call reject function when reject button is pressed', () => {
    spyOn(component, 'reject');
    let divElement = fixture.debugElement.query(By.css('#reject'));
    divElement.nativeElement.click()
    expect(component.reject).toHaveBeenCalled()
  })
});
