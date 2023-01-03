import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFailStatusComponent } from './delivery-fail-status.component';

describe('DeliveryFailStatusComponent', () => {
  let component: DeliveryFailStatusComponent;
  let fixture: ComponentFixture<DeliveryFailStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryFailStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFailStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
