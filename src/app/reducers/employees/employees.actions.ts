import { Action } from '@ngrx/store';

export enum employeesActionType {
  delete = 'EMPLOYEE_DELETE'
}

export class EmployeeDeleteAction implements Action {
  readonly type = employeesActionType.delete;

  constructor(public payload: {
    employeeId: number
  }) { }
}

export type EmployeesActions = EmployeeDeleteAction;
