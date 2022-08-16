import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'emotes',
    loadChildren: () => import('@nxt-emotes/feature').then((m) => m.EmotesFeatureModule),
  },
  { path: '', redirectTo: 'emotes', pathMatch: 'full' },
  { path: '**', redirectTo: 'emotes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
