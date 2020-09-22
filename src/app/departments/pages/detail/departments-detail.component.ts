import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as departmentActions from 'src/app/reducers/departmens/departments.actions';

import { Department, DepartmentsState } from 'src/app/reducers/departmens/departments.reducer';
import { selectDepartments } from 'src/app/reducers/departmens/departments.selectors';

@Component({
  selector: 'app-departments-detail',
  templateUrl: './departments-detail.component.html',
  styleUrls: ['./departments-detail.component.scss']
})
export class DepartmentsDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<DepartmentsState>
  ) { }

  public id: number;
  public department;
  public departments$: Observable<Department[]> = this.store$.pipe(select(selectDepartments));

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.getAll('id'))
    )
      .subscribe(id => this.id = +id);

    this.departments$.subscribe(res => {
      this.department = res[res.findIndex(item => item.id === this.id)];
    });

  }

  deleteDepartment(id) {
    this.store$.dispatch(new departmentActions.DeleteDepartment({ departmentId: id }));
    this.router.navigate(['']);
  }

}
