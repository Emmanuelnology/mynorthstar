import { TestBed } from '@angular/core/testing';

import { FireBaseServiceService } from './fire-base-service.service';

describe('FireBaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireBaseServiceService = TestBed.get(FireBaseServiceService);
    expect(service).toBeTruthy();
  });
});
