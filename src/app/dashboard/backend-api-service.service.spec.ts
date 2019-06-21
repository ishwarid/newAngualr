import { TestBed } from '@angular/core/testing';

import { BackendApiServiceService } from './backend-api-service.service';

describe('BackendApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendApiServiceService = TestBed.get(BackendApiServiceService);
    expect(service).toBeTruthy();
  });
});
