import { TestBed } from '@angular/core/testing';

import { ResumeApiDataService } from './resume-api-data.service';

describe('ResumeApiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeApiDataService = TestBed.get(ResumeApiDataService);
    expect(service).toBeTruthy();
  });
});
