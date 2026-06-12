import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServices } from './http-services';

describe('HttpServices', () => {
  let component: HttpServices;
  let fixture: ComponentFixture<HttpServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpServices],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
