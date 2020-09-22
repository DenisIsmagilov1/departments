import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpService } from './http.service';
import * as departmentActions from './reducers/departmens/departments.actions';
import * as employeeActions from './reducers/employees/employees.actions';
import * as errorsActions from './reducers/errors/errors.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HttpService) { }

  @Effect()
  getDepartments() {
    return this.actions$.pipe(
      ofType(departmentActions.types.getDepartments),
      switchMap(() => {
        return this.http.getDepartments()
          .pipe(
            map(data => new departmentActions.GetDepartmentsSuccess({
              departments: data
            }),
              catchError(error => of(new errorsActions.SetErrorAction({ message: error.statusText }))))
          );
      })
    );
  }

  @Effect()
  createDepartment() {
    return this.actions$.pipe(
      ofType(departmentActions.types.createDepartment),
      switchMap((action) => {
        return this.http.createDepartment(action.payload)
          .pipe(
            map((res) => new departmentActions.CreateDepartmentSuccess(res.data)),
            catchError(error => of(new errorsActions.SetErrorAction({ message: error.statusText })))
          );
      })
    );
  }

  @Effect()
  deleteDepartment() {
    return this.actions$.pipe(
      ofType(departmentActions.types.deleteDepartment),
      switchMap((action) => {
        return this.http.deleteDepartment(action.payload.departmentId)
          .pipe(
            map(() => new departmentActions.DeleteDepartmentSuccess(action.payload),
              catchError(error => of(new errorsActions.SetErrorAction({ message: error.statusText }))))
          );
      })
    );
  }

  @Effect()
  updateDepartment() {
    return this.actions$.pipe(
      ofType(departmentActions.types.updateDepartment),
      switchMap((action) => {
        return this.http.updateDepartment(action.payload)
          .pipe(
            map(() => new departmentActions.UpdateDepartmentSuccess(action.payload),
              catchError(error => of(new errorsActions.SetErrorAction({ message: error.statusText }))))
          );
      })
    );
  }

  @Effect()
  getEmployees() {
    return this.actions$.pipe(
      ofType(employeeActions.types.getEmployees),
      switchMap(() => {
        return this.http.getEmployees()
          .pipe(
            map(data => new employeeActions.GetEmployeesSuccess({
              employees: data
            }),
              catchError(error => of(new errorsActions.SetErrorAction({ message: error.statusText }))))
          );
      })
    );
  }

  @Effect()
  createEmployee() {
    return this.actions$.pipe(
      ofType(employeeActions.types.createEmployee),
      switchMap((action) => {
        return this.http.createEmployee(action.payload)
          .pipe(
            map((res) => new employeeActions.CreateEmployeeSuccess(res.data),
              catchError(error => of(new errorsActions.SetErrorAction({ message: error.statusText }))))
          );
      })
    );
  }

  @Effect()
  deleteEmployee() {
    return this.actions$.pipe(
      ofType(employeeActions.types.deleteEmployee),
      switchMap((action) => {
        return this.http.deleteEmployee(action.payload.employeeId)
          .pipe(
            map(() => new employeeActions.DeleteEmployeeSuccess(action.payload),
              catchError(error => of(new errorsActions.SetErrorAction({ message: error.statusText }))))
          );
      })
    );
  }

  @Effect()
  updateEmployee() {
    return this.actions$.pipe(
      ofType(employeeActions.types.updateEmployee),
      switchMap((action) => {
        return this.http.updateEmployee(action.payload)
          .pipe(
            map(() => new employeeActions.UpdateEmployeeSuccess(action.payload),
              catchError(error => of(new errorsActions.SetErrorAction({ message: error.statusText }))))
          );
      })
    );
  }

}
