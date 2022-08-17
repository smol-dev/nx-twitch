import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmoteListComponent } from './container/emote-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EmotesDataModule } from '@nxt-emotes/data';
import { EmotesUiModule } from '@nxt-emotes/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { DataGuard } from './data.guard';

const routes: Routes = [
  {
    canActivate: [DataGuard],
    path: '',
    pathMatch: 'full',
    component: EmoteListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EmotesDataModule,
    EmotesUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EmoteListComponent],
  providers: [],
})
export class EmotesFeatureModule {}
