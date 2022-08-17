import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  map,
  shareReplay,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { EmoteActions } from './emotes.actions';
import { EmoteAppState } from './emotes.reducers';
import { fromEmote } from './emotes.selectors';
import { EmoteService } from './emotes.service';

@Injectable()
export class EmoteEffects {
  constructor(
    private actions$: Actions,
    private store: Store<EmoteAppState>,
    private service: EmoteService
  ) {}

  getEmote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmoteActions.get),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromEmote.selectLoadStatus))
        )
      ),
      filter(([, loadStatus]) => loadStatus === 'NOT_LOADED'),
      map(() => EmoteActions.load())
    )
  );

  loadEmotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmoteActions.load),
      switchMap(() =>
        forkJoin([
          this.service.getBttv('39885827').pipe(
            shareReplay(),
            catchError((error) => of(error))
          ),
          this.service.getSevenTv('39885827').pipe(
            shareReplay(),
            catchError((error) => of(error))
          ),
          this.service.getFfz('39885827').pipe(
            shareReplay(),
            catchError((error) => of(error))
          ),
        ])
      ),
      map(([bttv, seventv, ffz]) => [...bttv, ...seventv, ...ffz]),
      map((emotes) => EmoteActions.loaded({ emotes }))
      // map(([bttv, sevenTv, ffz]) => EmoteActions.loaded({ groupedEmotes: { bttv, sevenTv, ffz } }))
    )
  );
}
