import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDetailsPopupComponent } from './container-details-popup.component';

describe('ContainerDetailsPopupComponent', () => {
  let component: ContainerDetailsPopupComponent;
  let fixture: ComponentFixture<ContainerDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDetailsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
