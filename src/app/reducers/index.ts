import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { departmentsNode, departmentsReducer, DepartmentsState } from './departmens/departments.reducer';

export interface State {
  [departmentsNode]: DepartmentsState;
}

export const reducers: ActionReducerMap<State> = {
  [departmentsNode]: departmentsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment ? [] : [];
