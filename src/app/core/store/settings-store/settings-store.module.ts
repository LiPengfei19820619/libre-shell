import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SettingsStoreEffects } from './effects';
import { settingsReducer } from './reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature([SettingsStoreEffects])
  ],
  providers: [SettingsStoreEffects]
})
export class SettingsStoreModule { }
