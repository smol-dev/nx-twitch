import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  concatMap,
  filter,
  map,
  switchMap,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import { EmoteActions } from '../emotes';
import { TwitchService } from '../twitch.service';
import { UserActions } from './users.actions';
import { UserAppState } from './users.reducers';
import { fromUser } from './users.selectors';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<UserAppState>,
    private ttvService: TwitchService
  ) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.get),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromUser.selectLoadStatus))
        )
      ),
      tap(console.debug),
      filter(([, loadStatus]) => loadStatus === 'NOT_LOADED'),
      map(([username]) => UserActions.load(username))
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.load),
      switchMap((action) => this.ttvService.getUser(action.username)),
      map((user) => UserActions.loaded({ user }))
    )
  );

  userLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loaded),
      map(() => EmoteActions.load())
    )
  );
}
