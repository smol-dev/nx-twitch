import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userFeatureKey, reducer } from './users.reducers';
import { UserEffects } from './users.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UsersDataModule {}
