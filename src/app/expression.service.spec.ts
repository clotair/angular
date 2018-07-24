import { TestBed, inject } from '@angular/core/testing';

import { ExpressionService } from './expression.service';

describe('ExpressionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpressionService]
    });
  });

  it('should be created', inject([ExpressionService], (service: ExpressionService) => {
    expect(service).toBeTruthy();
  }));
});
