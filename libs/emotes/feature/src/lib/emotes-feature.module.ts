import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EmotesContainerComponent,
} from './containers/emotes-container.component';
import { RouterModule, Routes } from '@angular/router';
import { EmotesDataModule, UsersDataModule } from '@nxt-emotes/data';
import { EmotesUiModule } from '@nxt-emotes/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectedUserGuard } from './data.guard';
import { UserCardComponent } from './components/user-card/user-card.component';
import { EmoteListComponent } from './containers/emote-list/emote-list.component';
// import { DataGuard } from './data.guard';

const routes: Routes = [
  {
    path: '',
    component: EmotesContainerComponent,
    children: [
      {
        canActivate: [SelectedUserGuard],
        path: ':username',
        component: EmoteListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmotesDataModule,
    UsersDataModule,
    EmotesUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    EmotesContainerComponent,
    EmoteListComponent,
    UserCardComponent,
  ],
  providers: [],
})
export class EmotesFeatureModule {}
