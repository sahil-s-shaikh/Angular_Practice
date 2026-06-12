import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingHomework } from './data-binding-homework';

describe('DataBindingHomework', () => {
  let component: DataBindingHomework;
  let fixture: ComponentFixture<DataBindingHomework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingHomework],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBindingHomework);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
