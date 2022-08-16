import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmoteListContainerComponent } from './container/emote-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: EmoteListContainerComponent },
    ]),
  ],
  declarations: [EmoteListContainerComponent],
  exports: [EmoteListContainerComponent],
})
export class EmoteListModule {}
