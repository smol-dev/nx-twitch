import { Action, createReducer, on } from '@ngrx/store';
import { UiUser } from '@nxt-emotes/model';
import { UserActions } from './users.actions';

export const userFeatureKey = 'User';

export interface UserState {
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  user: UiUser | null;
}

export interface UserAppState {
  [userFeatureKey]: UserState;
}

export const initialState: UserState = {
  loadStatus: 'NOT_LOADED',
  user: null,
};
const UserReducer = createReducer<UserState>(
  initialState,
  on(UserActions.get, (state) => ({
    ...state,
    loadStatus: 'NOT_LOADED',
    user: null,
  })),
  on(UserActions.load, (state) => ({
    ...state,
    loadStatus: 'LOADING',
    user: null,
  })),

  on(UserActions.loaded, (state, { user }) => ({
    ...state,
    loadStatus: 'LOADED',
    user,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return UserReducer(state, action);
}
