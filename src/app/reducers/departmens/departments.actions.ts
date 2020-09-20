import { Action } from '@ngrx/store';

export enum departmentActionsType {
  delete = 'DEPARTMENT_DELETE'
}

export class DepartmentDeleteAction implements Action {
  readonly type = departmentActionsType.delete;
  constructor(public payload: {
    departmentId: number
  }) { }
}

export type DepartmentActions = DepartmentDeleteAction;
