import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { uplodeGurdGuard } from './uplode-gurd-guard';

describe('uplodeGurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => uplodeGurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
