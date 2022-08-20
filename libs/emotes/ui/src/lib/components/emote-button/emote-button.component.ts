import { Component, Input, OnInit } from '@angular/core';
import { UiEmote } from '@nxt-emotes/model';

@Component({
  selector: 'nx-twitch-emote-button',
  templateUrl: './emote-button.component.html',
  styleUrls: ['./emote-button.component.scss'],
})
export class EmoteButtonComponent implements OnInit {
  @Input() emote!: UiEmote;

  get size(): string {
    switch (this.emote.type) {
      case 'ffz':
        return '3';
      default:
        return '3x';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
