import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmoteActions, fromEmote } from '@nxt-emotes/data';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    this.store.dispatch(EmoteActions.get());
    return this.store
      .select(fromEmote.isLoaded)
      .pipe(filter((isLoaded) => isLoaded));
  }
}
