import { createFeatureSelector, createSelector } from '@ngrx/store';
import { employeesNode, EmployeesState } from './employees.reducer';

export const selectEmployeesFeature = createFeatureSelector<EmployeesState>(employeesNode);

export const selectEmployees = createSelector(
  selectEmployeesFeature,
  (state) => state.data.employees
);
