import { TestBed } from '@angular/core/testing';

import { FalskApiService } from './falsk-api.service';

describe('FalskApiService', () => {
  let service: FalskApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FalskApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
