import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as departmentActions from 'src/app/reducers/departmens/departments.actions';
import { Department, DepartmentsState } from 'src/app/reducers/departmens/departments.reducer';
import { selectDepartments } from 'src/app/reducers/departmens/departments.selectors';

@Component({
  selector: 'app-departmantsupdate',
  templateUrl: './departments.update.component.html',
  styleUrls: ['./departments.update.component.scss']
})
export class DepartmentsUpdateComponent implements OnInit {

  public id: number;
  public name: string;
  public description: string;
  public department;
  public departments: Observable<Department[]> = this.store$.pipe(select(selectDepartments));

  constructor(
    private store$: Store<DepartmentsState>,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.getAll('id'))
    )
      .subscribe(id => this.id = +id);

    this.departments.subscribe(res => {
      this.department = res[res.findIndex(item => item.id === this.id)];
      if (this.department) {
        this.name = this.department.name;
        this.description = this.department.description;
      }
    });
  }

  updateDepartment() {
    const updDepartment = {
      id: this.id,
      name: this.name,
      description: this.description
    };

    this.store$.dispatch(new departmentActions.UpdateDepartment(updDepartment));

    this.router.navigate(['']);
  }
}
