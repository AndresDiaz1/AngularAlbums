import { TestBed, inject } from '@angular/core/testing';

import { RetrieverService } from './retriever.service';

describe('RetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieverService]
    });
  });

  it('should be created', inject([RetrieverService], (service: RetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
