import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Department, DepartmentsState } from '../reducers/departmens/departments.reducer';
import { selectDepartments } from '../reducers/departmens/departments.selectors';
import { Employees, EmployeesState } from '../reducers/employees/employees.reducer';
import { selectEmployees } from '../reducers/employees/employees.selectors';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  constructor(private storeEmployee$: Store<EmployeesState>) { }

  public employees$: Observable<Employees[]> = this.storeEmployee$.pipe(select(selectEmployees));

}
