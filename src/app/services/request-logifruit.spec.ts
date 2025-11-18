import { TestBed } from '@angular/core/testing';

import { RequestLogifruit } from './request-logifruit';

describe('RequestLogifruit', () => {
  let service: RequestLogifruit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestLogifruit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
