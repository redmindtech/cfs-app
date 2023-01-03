import { TestBed } from '@angular/core/testing';

import { CargoDeliveryService } from './cargo-delivery.service';

describe('CargoDeliveryService', () => {
  let service: CargoDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
