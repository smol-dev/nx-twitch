import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromUser } from '@nxt-emotes/data';

@Component({
  selector: 'nx-twitch-emote-container',
  templateUrl: './emotes-container.component.html',
  styleUrls: ['./emotes-container.component.scss'],
})
export class EmotesContainerComponent {
  // emotes$ = this.store.select(fromEmote.selectAll);
  user$ = this.store.select(fromUser.selectUser);
  loadStatus$ = this.store.select(fromUser.selectLoadStatus);

  term = '';
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  search(username: string): void {
    this.router.navigate([username.toLowerCase()], { relativeTo: this.route });
  }
}
