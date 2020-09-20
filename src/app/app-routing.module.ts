import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsDetailComponent } from './departments/detail/departments.detail.component';
import { DepartmentsComponent } from './departments/list/departments.list.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', component: DepartmentsComponent },
  { path: 'departments/detail/:id', component: DepartmentsDetailComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
