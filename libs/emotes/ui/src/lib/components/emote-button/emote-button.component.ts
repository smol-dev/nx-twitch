import { Component, Input, OnInit } from '@angular/core';
import { UiEmote } from '@nxt-emotes/model';

@Component({
  selector: 'nx-twitch-emote-button',
  templateUrl: './emote-button.component.html',
  styleUrls: ['./emote-button.component.scss'],
})
export class EmoteButtonComponent implements OnInit {
  @Input() emote!: UiEmote;
  @Input() size!: string;
  detail = false;

  get sizeEmote(): string {
    switch (this.emote.type) {
      case 'ffz':
        return this.size;
      default:
        return this.size + 'x';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
