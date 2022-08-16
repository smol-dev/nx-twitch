import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'emotes',
    loadChildren: () => import('@nx-emote-list').then((m) => m.EmoteListModule),
  },
  { path: '', redirectTo: 'emotes', pathMatch: 'full' },
  { path: '**', redirectTo: 'emotes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
