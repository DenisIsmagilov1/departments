import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DepartmentsState } from '../reducers/departmens/departments.reducer';
import { selectDepartments } from '../reducers/departmens/departments.selectors';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  constructor(private store$: Store<DepartmentsState>) { }

  public departments$: Observable<object[]> = this.store$.pipe(select(selectDepartments));

}
