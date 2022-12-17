import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCircleMenuComponent } from './toggle-circle-menu.component';

describe('ToggleCircleMenuComponent', () => {
  let component: ToggleCircleMenuComponent;
  let fixture: ComponentFixture<ToggleCircleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCircleMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleCircleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
