import { TestBed } from '@angular/core/testing';

import { DoctorserService } from './doctorser.service';

describe('DoctorserService', () => {
  let service: DoctorserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
