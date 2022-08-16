import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";

const routes: Routes = [
  {
    path: 'emotes',
    component: NxWelcomeComponent,
  },
  { path: '', redirectTo: 'emotes', pathMatch: 'full' },
  { path: '**', redirectTo: 'emotes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
