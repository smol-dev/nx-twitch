import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { emoteFeatureKey, reducer } from './emotes.reducers';
import { EmoteEffects } from './emotes.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(emoteFeatureKey, reducer),
    EffectsModule.forFeature([EmoteEffects]),
  ],
})
export class EmotesDataModule {}
