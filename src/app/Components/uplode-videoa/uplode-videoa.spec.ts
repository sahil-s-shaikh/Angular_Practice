import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodeVideoa } from './uplode-videoa';

describe('UplodeVideoa', () => {
  let component: UplodeVideoa;
  let fixture: ComponentFixture<UplodeVideoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UplodeVideoa],
    }).compileComponents();

    fixture = TestBed.createComponent(UplodeVideoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
