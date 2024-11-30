import { TestBed } from '@angular/core/testing';

import { RadiopathserviceService } from './radiopathservice.service';

describe('RadiopathserviceService', () => {
  let service: RadiopathserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadiopathserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
