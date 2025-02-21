import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDetailComponent } from './employees-detail.component';

describe('EmployeesdetailComponent', () => {
  let component: EmployeesDetailComponent;
  let fixture: ComponentFixture<EmployeesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
