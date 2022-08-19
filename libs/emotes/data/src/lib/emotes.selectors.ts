import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UiEmote } from '@nxt-emotes/model';
import { emoteFeatureKey, State } from './emotes.reducers';

const selectEmoteState = createFeatureSelector<State>(emoteFeatureKey);

const selectAll = createSelector(selectEmoteState, (state) => state.emotes);

const selectById = (id: string) =>
  createSelector(selectAll, (state: UiEmote[]) =>
    state.find((p) => p.id === id)
  );

const selectLoadStatus = createSelector(
  selectEmoteState,
  (state) => state.loadStatus
);

const isLoaded = createSelector(
  selectLoadStatus,
  (loadStatus) => loadStatus === 'LOADED'
);

const selectUser = createSelector(selectEmoteState, (state) => state.user);

export const fromEmote = {
  selectAll,
  selectById,
  selectLoadStatus,
  isLoaded,
  selectUser,
};
