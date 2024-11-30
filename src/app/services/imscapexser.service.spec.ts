import { TestBed } from '@angular/core/testing';

import { ImscapexserService } from './imscapexser.service';

describe('ImscapexserService', () => {
  let service: ImscapexserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImscapexserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
