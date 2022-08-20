import { Action, createReducer, on } from '@ngrx/store';
import { UiEmote } from '@nxt-emotes/model';
import { EmoteActions } from './emotes.actions';

export const emoteFeatureKey = 'Emote';

export interface EmoteState {
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  emotes: UiEmote[];
}

export interface EmoteAppState {
  [emoteFeatureKey]: EmoteState;
}

export const initialState: EmoteState = {
  loadStatus: 'NOT_LOADED',
  emotes: [],
};

const EmoteReducer = createReducer<EmoteState>(
  initialState,
  on(EmoteActions.load, (state) => ({
    ...state,
    loadStatus: 'LOADING',
  })),
  on(EmoteActions.loaded, (state, { emotes }) => ({
    ...state,
    loadStatus: 'LOADED',
    emotes,
  })),
);

export function reducer(state: EmoteState | undefined, action: Action) {
  return EmoteReducer(state, action);
}
