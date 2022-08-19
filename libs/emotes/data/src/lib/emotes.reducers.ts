import { Action, createReducer, on } from '@ngrx/store';
import { UiEmote, UiUser } from '@nxt-emotes/model';
import { EmoteActions, UserActions } from './emotes.actions';

export const emoteFeatureKey = 'Emote';

export interface State {
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  emotes: UiEmote[];
  user: UiUser;
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
  user: {} as UiUser,
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
  })),

  on(UserActions.loadUser, (state) => ({
    ...state,
    loadStatus: 'LOADING',
  })),

  on(UserActions.loadedUser, (state, { user }) => ({
    ...state,
    loadStatus: 'LOADED',
    user,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return EmoteReducer(state, action);
}
