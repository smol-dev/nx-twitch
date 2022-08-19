import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmoteActions, fromEmote } from '@nxt-emotes/data';

@Component({
  selector: 'nx-twitch-emote-list',
  templateUrl: './emote-list.component.html',
  styleUrls: ['./emote-list.component.scss'],
})
export class EmoteListComponent implements OnInit {
  emotes$ = this.store.select(fromEmote.selectAll);
  term = '';
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('yoyoyo');
  }

  search(username: string): void {
    console.log(username);

    this.store.dispatch(EmoteActions.getUser({ username }));
    // this.store.dispatch(EmoteActions.get());
    // return this.store
    //   .select(fromEmote.isLoaded)
    //   .pipe(filter((isLoaded) => isLoaded));
  }
}
