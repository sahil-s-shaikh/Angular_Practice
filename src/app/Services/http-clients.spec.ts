import { TestBed } from '@angular/core/testing';

import { HttpClients } from './http-clients';

describe('HttpClients', () => {
  let service: HttpClients;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClients);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
