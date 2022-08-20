import { createAction, props } from '@ngrx/store';
import { UiEmote } from '@nxt-emotes/model';

const get = createAction('[Emote] Get');
const load = createAction('[Emote] Load');
const loaded = createAction('[Emote] Loaded', props<{ emotes: UiEmote[] }>());
export const EmoteActions = {
  get,
  load,
  loaded,
};

export const PublicEmoteActions = {
  get,
  load,
};
