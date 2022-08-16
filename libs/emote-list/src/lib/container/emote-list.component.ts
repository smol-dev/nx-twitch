import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-twitch-emote-list',
  templateUrl: './emote-list.component.html',
  styleUrls: ['./emote-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmoteListContainerComponent {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
