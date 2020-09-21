import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as departmentAction from 'src/app/reducers/departmens/departments.actions';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-departmentcreate',
  templateUrl: './department.create.component.html',
  styleUrls: ['./department.create.component.scss'],
  providers: [HttpService]
})
export class DepartmentCreateComponent {
  public name: string;
  public description: string;
  constructor(private store$: Store, private router: Router, private http: HttpService) { }

  createDepartments() {
    const newDepartment = {
      name: this.name,
      description: this.description
    };
    this.store$.dispatch(new departmentAction.CreateDepartment(newDepartment));

    this.router.navigate(['']);
  }
}
