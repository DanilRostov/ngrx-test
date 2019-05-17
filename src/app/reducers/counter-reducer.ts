import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter-actions';

export const initialCounterState = 0;

export function counterReducer(state = initialCounterState, action: Action) {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return state + 1;
    case CounterActionTypes.Decrement:
      return state - 1;
    case CounterActionTypes.Reset:
      return 0;
    default:
      return state;
  }
}
