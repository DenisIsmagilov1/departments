import { Action } from '@ngrx/store';

export enum departmentActionsType {
  delete = 'DEPARTMENT_DELETE',
  create = 'DEPARTMENT_CREATE'
}

export class DepartmentDeleteAction implements Action {
  readonly type = departmentActionsType.delete;
  constructor(public payload: {
    departmentId: number
  }) { }
}

export class DepartmentCreateAction implements Action {
  readonly type = departmentActionsType.create;
  constructor(public payload: {
    name: string,
    description: string
  }) { }
}

export type DepartmentActions = DepartmentDeleteAction | DepartmentCreateAction;
