import { Action } from '@ngrx/store';

export enum employeesActionType {
  delete = 'EMPLOYEE_DELETE',
  create = 'EMPLOYEE_CREATE',
  update = 'EMPLOYEE_UPDATE'
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

export class EmployeeUpdateAction implements Action {
  readonly type = employeesActionType.update;

  constructor(public payload: {
    id: number,
    firstName: string,
    lastName: string,
    departmentId: number
  }) { }
}

export type EmployeesActions = EmployeeDeleteAction | EmployeeCreateAction | EmployeeUpdateAction;
