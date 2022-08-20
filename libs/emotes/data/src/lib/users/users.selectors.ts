import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from './users.reducers';

const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

const selectLoadStatus = createSelector(
  selectUserState,
  (state) => state.loadStatus
);

const isLoaded = createSelector(
  selectLoadStatus,
  (loadStatus) => loadStatus === 'LOADED'
);

const selectUser = createSelector(selectUserState, (state) => state.user);

export const fromUser = {
  selectLoadStatus,
  isLoaded,
  selectUser,
};
