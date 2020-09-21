import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as departmentActions from 'src/app/reducers/departmens/departments.actions';
import { Department, DepartmentsState } from '../../../reducers/departmens/departments.reducer';
import { selectDepartments } from '../../../reducers/departmens/departments.selectors';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.list.component.html',
  styleUrls: ['./departments.list.component.scss'],
})
export class DepartmentsComponent implements OnInit {
  constructor(private store$: Store<DepartmentsState>) { }
  public departments$: Observable<Department[]> = this.store$.pipe(select(selectDepartments));

  ngOnInit() {
    this.store$.dispatch(new departmentActions.GetDepartments());
  }

  deleteDepartment(id) {
    this.store$.dispatch(new departmentActions.DeleteDepartment({ departmentId: id }));
  }
}
