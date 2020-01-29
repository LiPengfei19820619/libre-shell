import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, mergeMap } from 'rxjs/operators';
import { SettingsService } from '../../services/settings.service';
import * as settingsActions from './actions';

@Injectable()
export class SettingsStoreEffects {
  constructor(private dataService: SettingsService, private actions$: Actions) { }

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<settingsActions.LoadRequestAction>(
      settingsActions.ActionTypes.LOAD_REQUEST
    ),
    switchMap(action =>
      this.dataService
        .getHosts()
        .pipe(
          map(
            result =>
              new settingsActions.LoadSuccessAction({
                items: result
              })
          ),
          catchError(error =>
            observableOf(new settingsActions.LoadFailureAction({ error }))
          )
        )
    )
  );

  addHost$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<settingsActions.AddHostRequestAction>(settingsActions.ActionTypes.ADD_HOST_REQUEST),
      switchMap(
        action =>
          this.dataService
            .addHost(action.payload.item)
            .pipe(
              map(
                host =>
                  new settingsActions.AddHostSuccessAction({
                    item: host
                  })
              ),
              catchError(error =>
                observableOf(new settingsActions.AddHostFailureAction({ error }))
              )
            )
      )
    )
  );
}

