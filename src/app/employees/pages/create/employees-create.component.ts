import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Department, DepartmentsState } from 'src/app/reducers/departmens/departments.reducer';
import { selectDepartments } from 'src/app/reducers/departmens/departments.selectors';
import * as employeeActions from 'src/app/reducers/employees/employees.actions';
import * as departmentActions from 'src/app/reducers/departmens/departments.actions';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public departmentId: number;
  public departments$: Observable<Department[]> = this.store$.pipe(select(selectDepartments));
  constructor(private store$: Store<DepartmentsState>, private router: Router) { }

  ngOnInit() {
    this.store$.dispatch(new departmentActions.GetDepartments());
  }

  createEmployee() {
    this.store$.dispatch(new employeeActions.CreateEmployee({
      firstName: this.firstName,
      lastName: this.lastName,
      departmentId: this.departmentId,
    }));

    this.router.navigate(['/employees']);
  }
}
