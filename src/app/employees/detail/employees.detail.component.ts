import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as employeeActions from 'src/app/reducers/employees/employees.actions';

import { Employees, EmployeesState } from 'src/app/reducers/employees/employees.reducer';
import { selectEmployees } from 'src/app/reducers/employees/employees.selectors';

@Component({
  selector: 'app-employeesdetail',
  templateUrl: './employees.detail.component.html',
  styleUrls: ['./employees.detail.component.scss']
})
export class EmployeesDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<EmployeesState>
  ) { }

  public id$: number;
  public employee$;
  public employees$: Observable<Employees[]> = this.store$.pipe(select(selectEmployees));

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.getAll('id'))
    )
      .subscribe(id => this.id$ = +id);

    this.employees$.subscribe(res => {
      this.employee$ = res[res.findIndex(item => item.id === this.id$)];
    });

  }

  deleteEmployee(id) {
    this.store$.dispatch(new employeeActions.DeleteEmployee({
      employeeId: id
    }));
    this.router.navigate(['/employees']);
  }

}
