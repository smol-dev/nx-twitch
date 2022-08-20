import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiUser } from '@nxt-emotes/model';

@Component({
  selector: 'nx-twitch-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user: UiUser | null = null;
  @Input() loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED' = 'NOT_LOADED';
  @Output() search = new EventEmitter<string>();
  constructor() {}
}
