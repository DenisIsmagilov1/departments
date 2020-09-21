import { Action } from '@ngrx/store';

export enum types {
  getEmployees = '[EMPLOYEES] Get employees',
  getEmployeesSuccess = '[EMPLOYEES] Get employees success',
  createEmployee = '[EMPLOYEES] Create employee',
  createEmployeeSuccess = '[EMPLOYEES] Create employee success',
  deleteEmployee = '[EMPLOYEES] Delete employee',
  deleteEmployeeSuccess = '[EMPLOYEES] Delete employee success',
  updateEmployee = '[EMPLOYEES] Update employee',
  updateEmployeeSuccess = '[EMPLOYEES] Update employee success',
}

export class GetEmployees implements Action {
  readonly type = types.getEmployees;
}

export class GetEmployeesSuccess implements Action {
  readonly type = types.getEmployeesSuccess;
  constructor(public payload: {
    employees
  }) { }
}

export class CreateEmployee implements Action {
  readonly type = types.createEmployee;

  constructor(public payload: {
    firstName: string,
    lastName: string,
    departmentId: number
  }) { }
}

export class CreateEmployeeSuccess implements Action {
  readonly type = types.createEmployeeSuccess;

  constructor(public payload: {
    firstName: string,
    lastName: string,
    departmentId: number
  }) { }
}

export class DeleteEmployee implements Action {
  readonly type = types.deleteEmployee;

  constructor(public payload: {
    employeeId: number
  }) { }
}

export class DeleteEmployeeSuccess implements Action {
  readonly type = types.deleteEmployeeSuccess;

  constructor(public payload: {
    employeeId: number
  }) { }
}

export class UpdateEmployee implements Action {
  readonly type = types.updateEmployee;

  constructor(public payload: {
    id: number,
    firstName: string,
    lastName: string,
    departmentId: number
  }) { }
}

export class UpdateEmployeeSuccess implements Action {
  readonly type = types.updateEmployeeSuccess;

  constructor(public payload: {
    id: number,
    firstName: string,
    lastName: string,
    departmentId: number
  }) { }
}

export type EmployeesActions = GetEmployees | GetEmployeesSuccess |
  CreateEmployee | CreateEmployeeSuccess |
  DeleteEmployee | DeleteEmployeeSuccess |
  UpdateEmployee | UpdateEmployeeSuccess;