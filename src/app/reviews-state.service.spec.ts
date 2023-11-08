import { TestBed } from '@angular/core/testing';

import { ReviewsStateService } from './reviews-state.service';

describe('ReviewsStateService', () => {
  let service: ReviewsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
