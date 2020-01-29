import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

import { Host } from '../../models';

export function settingsReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        hosts: action.payload.items,
        error: null,
        isLoading: false
      };
    case ActionTypes.LOAD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    case ActionTypes.ADD_HOST_SUCCESS:
      let hosts: Host[] = [];
      if (state.hosts) {
        hosts = [...state.hosts, action.payload.item];
      } else {
        hosts = [action.payload.item];
      }
      return {
        ...state,
        hosts: hosts,
        error: null,
        isLoading: false
      }
    default: {
      return state;
    }
  }
}