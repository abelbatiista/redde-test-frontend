import { TestBed } from '@angular/core/testing';

import { WebScrappingService } from './web-scrapping.service';

describe('WebScrappingService', () => {
  let service: WebScrappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebScrappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
