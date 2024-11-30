import { TestBed } from '@angular/core/testing';

import { IpdcensusService } from './ipdcensus.service';

describe('IpdcensusService', () => {
  let service: IpdcensusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpdcensusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
