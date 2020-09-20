import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsDetailComponent } from './departments/detail/departments.detail.component';
import { DepartmentsComponent } from './departments/list/departments.list.component';
import { EmployeesDetailComponent } from './employees/detail/employees.detail.component';
import { EmployeesComponent } from './employees/list/employees.list.component';

const routes: Routes = [
  { path: '', component: DepartmentsComponent },
  { path: 'departments/detail/:id', component: DepartmentsDetailComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/detail/:id', component: EmployeesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
