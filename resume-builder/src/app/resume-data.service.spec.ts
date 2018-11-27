import { TestBed } from '@angular/core/testing';

import { ResumeDataService } from './resume-data.service';

describe('ResumeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeDataService = TestBed.get(ResumeDataService);
    expect(service).toBeTruthy();
  });
});
