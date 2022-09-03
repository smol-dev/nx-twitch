import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmoteActions, fromEmote } from '@nxt-emotes/data';

@Component({
  selector: 'nx-twitch-emote-list',
  templateUrl: './emote-list.component.html',
  styleUrls: ['./emote-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmoteListComponent implements OnInit {
  emotes$ = this.store.select(fromEmote.selectAll);
  loadStatus$ = this.store.select(fromEmote.selectLoadStatus);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(EmoteActions.get());
  }
}
