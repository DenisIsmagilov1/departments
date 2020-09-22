import { createFeatureSelector, createSelector } from '@ngrx/store';
import { errorsNode, ErrorsState } from './errors.reducer';

export const selectErrorsFeature = createFeatureSelector<ErrorsState>(errorsNode);

export const selectError = createSelector(
  selectErrorsFeature,
  (state: ErrorsState) => state.message
);
