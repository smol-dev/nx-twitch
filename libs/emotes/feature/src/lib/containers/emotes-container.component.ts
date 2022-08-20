import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmoteActions, fromUser, UserActions } from '@nxt-emotes/data';

@Component({
  selector: 'nx-twitch-emote-container',
  templateUrl: './emotes-container.component.html',
  styleUrls: ['./emotes-container.component.scss'],
})
export class EmotesContainerComponent implements OnInit {
  // emotes$ = this.store.select(fromEmote.selectAll);
  user$ = this.store.select(fromUser.selectUser);
  loadStatus$ = this.store.select(fromUser.selectLoadStatus);

  term = '';
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('yoyoyo');
  }

  search(username: string): void {
    this.router.navigate([ username.toLowerCase()], { relativeTo: this.route });
  }
}
