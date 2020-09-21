import { Action } from '@ngrx/store';

export enum types {
  getDepartments = '[DEPARTMENTS] Get departments',
  getDepartmentsSuccess = '[DEPARTMENTS] Get departments success',
  createDepartment = '[DEPARTMENTS] Create department',
  createDepartmentSuccess = '[DEPARTMENTS] Create department success',
  deleteDepartment = '[DEPARTMENTS] Delete department',
  deleteDepartmentSuccess = '[DEPARTMENTS] Delete department success',
  updateDepartment = '[DEPARTMENTS] Update department',
  updateDepartmentSuccess = '[DEPARTMENTS] Update department success',
}

export class GetDepartments implements Action {
  readonly type = types.getDepartments;
}

export class GetDepartmentsSuccess implements Action {
  readonly type = types.getDepartmentsSuccess;
  constructor(public payload: {
    departments
  }) { }
}

export class CreateDepartment implements Action {
  readonly type = types.createDepartment;
  constructor(public payload: {
    name: string,
    description: string
  }) { }
}

export class CreateDepartmentSuccess implements Action {
  readonly type = types.createDepartmentSuccess;
  constructor(public payload: {
    name: string,
    description: string
  }) { }
}

export class DeleteDepartment implements Action {
  readonly type = types.deleteDepartment;
  constructor(public payload: {
    departmentId: number
  }) { }
}

export class DeleteDepartmentSuccess implements Action {
  readonly type = types.deleteDepartmentSuccess;
  constructor(public payload: {
    departmentId: number
  }) { }
}

export class UpdateDepartment implements Action {
  readonly type = types.updateDepartment;
  constructor(public payload: {
    id: number,
    name: string,
    description: string
  }) { }
}

export class UpdateDepartmentSuccess implements Action {
  readonly type = types.updateDepartmentSuccess;
  constructor(public payload: {
    id: number,
    name: string,
    description: string
  }) { }
}

export type DepartmentActions = GetDepartments | GetDepartmentsSuccess |
  CreateDepartment | CreateDepartmentSuccess |
  DeleteDepartment | DeleteDepartmentSuccess |
  UpdateDepartment | UpdateDepartmentSuccess;
