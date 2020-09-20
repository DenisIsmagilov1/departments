import { Action } from '@ngrx/store';

export enum employeesActionType {
  delete = 'EMPLOYEE_DELETE',
  create = 'EMPLOYEE_CREATE'
}

export class EmployeeDeleteAction implements Action {
  readonly type = employeesActionType.delete;

  constructor(public payload: {
    employeeId: number
  }) { }
}

export class EmployeeCreateAction implements Action {
  readonly type = employeesActionType.create;

  constructor(public payload: {
    firstName: string,
    lastName: string,
    departmentId: number
  }) { }
}

export type EmployeesActions = EmployeeDeleteAction | EmployeeCreateAction;
