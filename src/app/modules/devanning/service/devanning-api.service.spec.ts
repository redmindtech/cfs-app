import { TestBed } from '@angular/core/testing';

import { DevanningApiService } from './devanning-api.service';

describe('DevanningApiService', () => {
  let service: DevanningApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevanningApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
