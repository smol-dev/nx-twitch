import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { EmoteActions, UserActions } from './emotes.actions';
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
      withLatestFrom(this.store.select(fromEmote.selectUser)),
      tap(console.debug),
      // filter((user) => user !== null),
      switchMap(([, user]) =>
        forkJoin([
          this.service.getBttv(user.id).pipe(catchError((error) => of(error))),
          this.service
            .getSevenTv(user.id)
            .pipe(catchError((error) => of(error))),
          this.service.getFfz(user.id).pipe(catchError((error) => of(error))),
        ])
      ),
      map(([bttv, seventv, ffz]) => [...bttv, ...seventv, ...ffz]),
      map((emotes) => EmoteActions.loaded({ emotes }))
      // map(([bttv, sevenTv, ffz]) => EmoteActions.loaded({ groupedEmotes: { bttv, sevenTv, ffz } }))
    )
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromEmote.selectLoadStatus))
        )
      ),
      filter(([, loadStatus]) => loadStatus === 'NOT_LOADED'),
      map(([{ username }]) => UserActions.loadUser({ username }))
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap((action) => this.service.getUser(action.username)),
      map((user) => UserActions.loadedUser({ user }))
    )
  );

  userLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadedUser),
      map(() => EmoteActions.load())
    )
  );
}
