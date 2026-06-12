import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCrud } from './students-crud';

describe('StudentsCrud', () => {
  let component: StudentsCrud;
  let fixture: ComponentFixture<StudentsCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
