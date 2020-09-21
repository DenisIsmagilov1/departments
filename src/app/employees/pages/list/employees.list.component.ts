import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as departmentActions from 'src/app/reducers/departmens/departments.actions';
import { Department } from 'src/app/reducers/departmens/departments.reducer';
import { selectDepartments } from 'src/app/reducers/departmens/departments.selectors';
import * as employeeActions from 'src/app/reducers/employees/employees.actions';

import { Employees } from '../../../reducers/employees/employees.reducer';
import { selectEmployees } from '../../../reducers/employees/employees.selectors';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.list.component.html',
  styleUrls: ['./employees.list.component.scss']
})
export class EmployeesComponent implements OnInit {
  constructor(private store$: Store) { }
  public employees$: Observable<Employees[]> = this.store$.pipe(select(selectEmployees));
  public departments$: Observable<Department[]> = this.store$.pipe(select(selectDepartments));

  ngOnInit() {
    this.store$.dispatch(new employeeActions.GetEmployees());
    this.store$.dispatch(new departmentActions.GetDepartments());
  }
}
