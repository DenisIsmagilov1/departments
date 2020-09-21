import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import * as employeeActions from 'src/app/reducers/employees/employees.actions';
import { switchMap } from 'rxjs/operators';
import { selectDepartments } from 'src/app/reducers/departmens/departments.selectors';
import { Observable } from 'rxjs';
import { Department } from 'src/app/reducers/departmens/departments.reducer';
import { selectEmployees } from 'src/app/reducers/employees/employees.selectors';
import { Employees } from 'src/app/reducers/employees/employees.reducer';

@Component({
  selector: 'app-employeesupdate',
  templateUrl: './employees.update.component.html',
  styleUrls: ['./employees.update.component.scss']
})
export class EmployeesUpdateComponent implements OnInit {
  public id: number;
  public firstName: string;
  public lastName: string;
  public departmentId: number;
  public departments: Observable<Department[]> = this.store$.pipe(select(selectDepartments));
  public employees: Observable<Employees[]> = this.store$.pipe(select(selectEmployees));
  public employee: Employees;

  constructor(private store$: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.getAll('id'))
    )
      .subscribe(id => this.id = +id);

    this.employees.subscribe(res => {
      this.employee = res[res.findIndex(item => item.id === this.id)];

      if (this.employee) {
        this.firstName = this.employee.firstName;
        this.lastName = this.employee.lastName;
        this.departmentId = this.employee.departmentId;
      }
    });
  }

  updateEmployee() {
    this.store$.dispatch(new employeeActions.UpdateEmployee({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      departmentId: this.departmentId
    }));

    this.router.navigate(['/employees']);
  }

}
