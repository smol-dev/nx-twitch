import { createAction, props } from '@ngrx/store';
import { UiUser } from '@nxt-emotes/model';

const get = createAction('[User] Get User', props<{ username: string }>());
const load = createAction('[User] Load User', props<{ username: string }>());
const loaded = createAction('[User] Loaded User', props<{ user: UiUser }>());

export const UserActions = {
  get,
  load,
  loaded,
};

export const PublicUserActions = {
  get,
  load,
  loaded,
};
