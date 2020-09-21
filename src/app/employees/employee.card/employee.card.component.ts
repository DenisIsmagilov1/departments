import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Department } from 'src/app/reducers/departmens/departments.reducer';
import { selectDepartments } from 'src/app/reducers/departmens/departments.selectors';

import * as employeeActions from 'src/app/reducers/employees/employees.actions';
import { Employees } from 'src/app/reducers/employees/employees.reducer';

@Component({
  selector: 'app-employeecard',
  templateUrl: './employee.card.component.html',
  styleUrls: ['./employee.card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee: Employees;
  departments: Observable<Department[]> = this.store$.pipe(select(selectDepartments));
  public department;

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.departments.pipe(
      map(item => item.filter(v => v.id == this.employee.departmentId)),
    )
      .subscribe(res => this.department = res[0]);
  }

  deleteEmployee(id) {
    this.store$.dispatch(new employeeActions.DeleteEmployee({
      employeeId: id
    }));
  }

}
