import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuHeaderComponent } from './sub-menu-header.component';
import { AppModule } from 'src/app/app.module';
import { AppLayoutModule } from '../app.layout.module';
import { By } from '@angular/platform-browser';

fdescribe('SubMenuHeaderComponent', () => {
  let component: SubMenuHeaderComponent;
  let fixture: ComponentFixture<SubMenuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubMenuHeaderComponent],
      imports: [AppModule, AppLayoutModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when back button is clicked', () => {
    spyOn(component.closeScreen, 'emit');
    component.changeVisibility();
    expect(component.closeScreen.emit).toHaveBeenCalled();
  });

  it('should call change Visisbility function when back button is pressed', () => {
    spyOn(component, 'changeVisibility');
    let divElement = fixture.debugElement.query(By.css('#back-button'));
    divElement.nativeElement.click()
    expect(component.changeVisibility).toHaveBeenCalled()
  })
});
