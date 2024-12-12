import { TestBed } from '@angular/core/testing';

import { PatientregService } from './patientreg.service';

describe('PatientregService', () => {
  let service: PatientregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
