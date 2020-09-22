import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as employeeActions from 'src/app/reducers/employees/employees.actions';
import * as departmentActions from 'src/app/reducers/departmens/departments.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'departments';

  constructor(private store$: Store) { }

  ngOnInit() {
    this.store$.dispatch(new employeeActions.GetEmployees());
    this.store$.dispatch(new departmentActions.GetDepartments());
  }
}
