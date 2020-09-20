import { Action } from '@ngrx/store';

export enum departmentActionsType {
  delete = 'DEPARTMENT_DELETE',
  create = 'DEPARTMENT_CREATE',
  update = 'DERATMENT_UPDATE'
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

export class DepartmentUpdateAction implements Action {
  readonly type = departmentActionsType.update;
  constructor(public payload: {
    id: number,
    name: string,
    description: string
  }) { }
}

export type DepartmentActions = DepartmentDeleteAction | DepartmentCreateAction | DepartmentUpdateAction;
