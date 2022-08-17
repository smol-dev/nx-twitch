import { Action, createReducer, on } from '@ngrx/store';
import { UiEmote } from '@nxt-emotes/model';
import { EmoteActions } from './emotes.actions';

export const emoteFeatureKey = 'Emote';

export interface State {
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  emotes: UiEmote[];
  // groupedEmotes: {
  //   bttv: UiEmote[];
  //   sevenTv: UiEmote[];
  //   ffz: UiEmote[];
  // }
}

export interface EmoteAppState {
  [emoteFeatureKey]: State;
}

export const initialState: State = {
  loadStatus: 'NOT_LOADED',
  emotes: [],
  // groupedEmotes: {
  //   bttv: [],
  //   sevenTv: [],
  //   ffz: [],
  // }
};

const EmoteReducer = createReducer<State>(
  initialState,
  on(EmoteActions.load, (state) => ({
    ...state,
    loadStatus: 'LOADING',
  })),
  on(EmoteActions.loaded, (state, { emotes }) => ({
    ...state,
    loadStatus: 'LOADED',
    emotes,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return EmoteReducer(state, action);
}
