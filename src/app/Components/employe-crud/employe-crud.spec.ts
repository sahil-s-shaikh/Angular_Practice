import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeCRUD } from './employe-crud';

describe('EmployeCRUD', () => {
  let component: EmployeCRUD;
  let fixture: ComponentFixture<EmployeCRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeCRUD],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeCRUD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
