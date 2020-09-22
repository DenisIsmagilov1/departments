import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { departmentsNode, departmentsReducer, DepartmentsState } from './departmens/departments.reducer';
import { employeesNode, employeesReducer, EmployeesState } from './employees/employees.reducer';
import { errorsNode, errorsReducer, ErrorsState } from './errors/errors.reducer';

export interface State {
  [departmentsNode]: DepartmentsState;
  [employeesNode]: EmployeesState;
  [errorsNode]: ErrorsState;
}

export const reducers: ActionReducerMap<State> = {
  [departmentsNode]: departmentsReducer,
  [employeesNode]: employeesReducer,
  [errorsNode]: errorsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment ? [] : [];
