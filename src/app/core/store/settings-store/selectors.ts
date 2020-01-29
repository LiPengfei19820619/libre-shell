import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
  
  import { Host } from '../../models';
  
  import { State } from './state';
  
  const getError = (state: State): any => state.error;
  
  const getIsLoading = (state: State): boolean => state.isLoading;
  
  const getHosts = (state: State): Host[] => state.hosts;
  
  export const selectSettingsState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('settings');
  
  export const selectSettingsError: MemoizedSelector<
    object,
    any
  > = createSelector(
    selectSettingsState,
    getError
  );
  
  export const selectSettingsIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(
    selectSettingsState,
    getIsLoading
  );
  
  export const selectSettingsHosts: MemoizedSelector<
    object,
    Host[]
  > = createSelector(
    selectSettingsState,
    getHosts
  );
