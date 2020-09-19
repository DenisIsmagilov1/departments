import { createFeatureSelector, createSelector } from '@ngrx/store';
import { departmentsNode, DepartmentsState } from './departments.reducer';

export const selectDepartmentsFeature = createFeatureSelector<DepartmentsState>(departmentsNode);

export const selectDepartments = createSelector(
  selectDepartmentsFeature,
  (state: DepartmentsState) => state.data.departments
);
