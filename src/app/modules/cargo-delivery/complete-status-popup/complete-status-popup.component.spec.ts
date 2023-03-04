import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteStatusPopupComponent } from './complete-status-popup.component';

describe('CompleteStatusPopupComponent', () => {
  let component: CompleteStatusPopupComponent;
  let fixture: ComponentFixture<CompleteStatusPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteStatusPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
