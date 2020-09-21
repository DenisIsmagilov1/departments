import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentCreateComponent } from './departments/pages/create/department.create.component';
import { DepartmentsDetailComponent } from './departments/pages/detail/departments.detail.component';
import { DepartmentsComponent } from './departments/pages/list/departments.list.component';
import { DepartmentsUpdateComponent } from './departments/pages/update/departments.update.component';
import { EmployeesCreateComponent } from './employees/pages/create/employees.create.component';
import { EmployeesDetailComponent } from './employees/pages/detail/employees.detail.component';
import { EmployeesComponent } from './employees/pages/list/employees.list.component';
import { EmployeesUpdateComponent } from './employees/pages/update/employees.update.component';

const routes: Routes = [
  { path: 'departments/detail/:id', component: DepartmentsDetailComponent },
  { path: 'departments/create', component: DepartmentCreateComponent },
  { path: 'departments/update/:id', component: DepartmentsUpdateComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/detail/:id', component: EmployeesDetailComponent },
  { path: 'employees/create', component: EmployeesCreateComponent },
  { path: 'employees/update/:id', component: EmployeesUpdateComponent },
  { path: '', component: DepartmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
