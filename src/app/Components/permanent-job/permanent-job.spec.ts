import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentJob } from './permanent-job';

describe('PermanentJob', () => {
  let component: PermanentJob;
  let fixture: ComponentFixture<PermanentJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentJob],
    }).compileComponents();

    fixture = TestBed.createComponent(PermanentJob);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
