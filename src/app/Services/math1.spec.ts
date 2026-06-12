import { TestBed } from '@angular/core/testing';

import { Math1 } from './math1';

describe('Math1', () => {
  let service: Math1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Math1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
