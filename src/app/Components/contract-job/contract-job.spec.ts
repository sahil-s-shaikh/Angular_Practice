import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractJob } from './contract-job';

describe('ContractJob', () => {
  let component: ContractJob;
  let fixture: ComponentFixture<ContractJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractJob],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractJob);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
