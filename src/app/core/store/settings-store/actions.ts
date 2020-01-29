import { Action } from '@ngrx/store';
import { Host } from "../../models";

export enum ActionTypes {
  LOAD_REQUEST = '[Settings] Load Request',
  LOAD_FAILURE = '[Settings] Load Failure',
  LOAD_SUCCESS = '[Settings] Load Success',
  ADD_HOST_REQUEST = '[Settings] Add Host Request',
  ADD_HOST_SUCCESS = '[Settings] Add Host Success',
  ADD_HOST_FAILURE = '[Settings] Add Host Failure',
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) { }
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Host[] }) { }
}

export class AddHostRequestAction implements Action {
  readonly type = ActionTypes.ADD_HOST_REQUEST;
  constructor(public payload: { item: Host }) { }
}

export class AddHostFailureAction implements Action {
  readonly type = ActionTypes.ADD_HOST_FAILURE;
  constructor(public payload: { error: string }) { }
}

export class AddHostSuccessAction implements Action {
  readonly type = ActionTypes.ADD_HOST_SUCCESS;
  constructor(public payload: { item: Host }) { }
}

export type Actions =
  LoadRequestAction |
  LoadFailureAction |
  LoadSuccessAction |
  AddHostRequestAction |
  AddHostFailureAction |
  AddHostSuccessAction;
