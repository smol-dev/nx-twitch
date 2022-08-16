import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmoteListComponent } from './container/emote-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: EmoteListComponent },
    ]),
  ],
})
export class EmotesFeatureModule {}
