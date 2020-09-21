import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as departmentActions from 'src/app/reducers/departmens/departments.actions';
import * as employeeActions from 'src/app/reducers/employees/employees.actions';

import { Employees, EmployeesState } from '../../reducers/employees/employees.reducer';
import { selectEmployees } from '../../reducers/employees/employees.selectors';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.list.component.html',
  styleUrls: ['./employees.list.component.scss']
})
export class EmployeesComponent implements OnInit {
  constructor(private storeEmployee$: Store<EmployeesState>) { }
  public employees$: Observable<Employees[]> = this.storeEmployee$.pipe(select(selectEmployees));

  ngOnInit() {
    this.storeEmployee$.dispatch(new employeeActions.GetEmployees());
    this.storeEmployee$.dispatch(new departmentActions.GetDepartments());
  }


  deleteEmployee(id) {
    console.log(id)
    this.storeEmployee$.dispatch(new employeeActions.DeleteEmployee({
      employeeId: id
    }));
  }

}
