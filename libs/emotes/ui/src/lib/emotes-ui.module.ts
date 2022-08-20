import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmoteButtonComponent } from './components/emote-button/emote-button.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [EmoteButtonComponent, SearchFieldComponent],
  exports: [EmoteButtonComponent, SearchFieldComponent],
})
export class EmotesUiModule {}
