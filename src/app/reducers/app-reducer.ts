import {
  StoriesState,
  initialStoriesState,
  storyReducer,
} from './story-reducer';
import {
  initialTripsState,
  TripsState,
  tripsReducer,
} from './trips-reducer';
import { initialCounterState, counterReducer } from './counter-reducer';
import * as StoryActions from '../actions/story-actions';
import { compose } from '@ngrx/store';


export interface AppState {
  counter: number;
  travels: {
    stories: StoriesState;
    trips: TripsState;
  };
}

export const initialAppState: AppState = {
  counter: initialCounterState,
  travels: {
    stories: initialStoriesState,
    trips: initialTripsState,
  },
};

export function appReducer(state = initialAppState, action: StoryActions.ActionsUnion ): AppState {
  return compose(
    storyReducer(initialStoriesState, action),
    counterReducer(initialCounterState, action),
    tripsReducer(initialTripsState, action),
  )(state);
}
