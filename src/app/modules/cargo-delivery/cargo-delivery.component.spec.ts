import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDeliveryComponent } from './cargo-delivery.component';

describe('CargoDeliveryComponent', () => {
  let component: CargoDeliveryComponent;
  let fixture: ComponentFixture<CargoDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
