import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEmote } from '@nxt-emotes/data';

@Component({
  selector: 'nx-twitch-emote-list',
  templateUrl: './emote-list.component.html',
  styleUrls: ['./emote-list.component.scss'],
})
export class EmoteListComponent implements OnInit {
  emotes$ = this.store.select(fromEmote.selectAll);

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('yoyoyo');
  }
}
