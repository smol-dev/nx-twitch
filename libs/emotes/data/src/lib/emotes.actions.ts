import { createAction, props } from '@ngrx/store';
import { UiEmote, UiUser } from '@nxt-emotes/model';

const get = createAction('[Emote] Get');
const load = createAction('[Emote] Load');
const loaded = createAction('[Emote] Loaded', props<{ emotes: UiEmote[] }>());

const getUser = createAction('[User] Get User', props<{ username: string }>());
const loadUser = createAction(
  '[User] Load User',
  props<{ username: string }>()
);
const loadedUser = createAction(
  '[User] Loaded User',
  props<{ user: UiUser }>()
);

export const EmoteActions = {
  get,
  load,
  loaded,
};

export const UserActions = {
  getUser,
  loadUser,
  loadedUser,
};

export const PublicEmoteActions = {
  get,
  getUser,
};
