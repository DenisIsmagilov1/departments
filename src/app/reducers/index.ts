import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { departmentsNode, departmentsReducer, DepartmentsState } from './departmens/departments.reducer';
import { employeesNode, employeesReducer, EmployeesState } from './employees/employees.reducer';

export interface State {
  [departmentsNode]: DepartmentsState;
  [employeesNode]: EmployeesState;
}

export const reducers: ActionReducerMap<State> = {
  [departmentsNode]: departmentsReducer,
  [employeesNode]: employeesReducer
};

export const metaReducers: MetaReducer<State>[] = !environment ? [] : [];
