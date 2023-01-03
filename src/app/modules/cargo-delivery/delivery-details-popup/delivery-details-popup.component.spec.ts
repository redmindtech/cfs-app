import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDetailsPopupComponent } from './delivery-details-popup.component';

describe('DeliveryDetailsPopupComponent', () => {
  let component: DeliveryDetailsPopupComponent;
  let fixture: ComponentFixture<DeliveryDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDetailsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
