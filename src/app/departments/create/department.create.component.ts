import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { DepartmentCreateAction } from 'src/app/reducers/departmens/departments.actions';

@Component({
  selector: 'app-departmentcreate',
  templateUrl: './department.create.component.html',
  styleUrls: ['./department.create.component.scss']
})
export class DepartmentCreateComponent {
  public name: string;
  public description: string;
  constructor(private store$: Store, private router: Router) { }

  createDepartments() {
    this.store$.dispatch(new DepartmentCreateAction({
      name: this.name,
      description: this.description
    }));

    this.router.navigate(['']);
  }
}
