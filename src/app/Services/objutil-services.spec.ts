import { TestBed } from '@angular/core/testing';

import { ObjutilServices } from './objutil-services';

describe('ObjutilServices', () => {
  let service: ObjutilServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjutilServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
