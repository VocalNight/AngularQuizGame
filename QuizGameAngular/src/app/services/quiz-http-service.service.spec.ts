import { TestBed } from '@angular/core/testing';

import { QuizHttpServiceService } from './quiz-http-service.service';

describe('QuizHttpServiceService', () => {
  let service: QuizHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
