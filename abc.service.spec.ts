import { TestBed, inject } from '@angular/core/testing';

import { AbcService } from './abc.service';

describe('AbcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbcService]
    });
  });

  it('should be created', inject([AbcService], (service: AbcService) => {
    expect(service).toBeTruthy();
  }));
});
