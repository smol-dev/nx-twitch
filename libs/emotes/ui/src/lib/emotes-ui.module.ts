import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmoteButtonComponent } from './components/emote-button/emote-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmoteButtonComponent],
  exports: [EmoteButtonComponent],
})
export class EmotesUiModule {}
