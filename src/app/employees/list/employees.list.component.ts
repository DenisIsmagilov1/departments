import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeDeleteAction } from 'src/app/reducers/employees/employees.actions';

import { Employees, EmployeesState } from '../../reducers/employees/employees.reducer';
import { selectEmployees } from '../../reducers/employees/employees.selectors';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.list.component.html',
  styleUrls: ['./employees.list.component.scss']
})
export class EmployeesComponent {
  constructor(private storeEmployee$: Store<EmployeesState>) { }

  public employees$: Observable<Employees[]> = this.storeEmployee$.pipe(select(selectEmployees));

  deleteEmployee(id) {
    this.storeEmployee$.dispatch(new EmployeeDeleteAction({
      employeeId: id
    }));
  }

}
