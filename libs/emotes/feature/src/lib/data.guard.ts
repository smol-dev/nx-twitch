import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromUser, UserActions } from '@nxt-emotes/data';
import { filter, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    // this.store.dispatch(EmoteActions.get());
    // return this.store
    //   .select(fromEmote.isLoaded)
    //   .pipe(filter((isLoaded) => isLoaded));
    return of(true);
  }
}

@Injectable({
  providedIn: 'root',
})
export class SelectedUserGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const username = route.paramMap.get('username');
    console.log('canActivate', username);
    this.store.dispatch(UserActions.get({ username: username ?? 'lim0l' }));
    return this.store
      .select(fromUser.isLoaded)
      .pipe(filter((isLoaded) => isLoaded));
  }
}
