import { TestBed } from '@angular/core/testing';

import { PokenmonService } from './pokenmon.service';

describe('PokenmonService', () => {
  let service: PokenmonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokenmonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
