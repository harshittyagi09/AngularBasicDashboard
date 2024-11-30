import { TestBed } from '@angular/core/testing';

import { PharmacyserviceService } from './pharmacyservice.service';

describe('PharmacyserviceService', () => {
  let service: PharmacyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
