import * as StoryActions from '../actions/story-actions';
import { Story } from '../models/story-models';

export interface TripsState {
  data: Story[];
  loading: boolean;
  error: string;
}

export const initialTripsState: TripsState = {
  data: [],
  loading: false,
  error: '',
};

export function tripsReducer(
  state = initialTripsState,
  action: StoryActions.ActionsUnion
): TripsState {
  switch (action.type) {
    case StoryActions.StoryActionTypes.LoadStories: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case StoryActions.StoryActionTypes.CreateStory: {
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    }

    case StoryActions.StoryActionTypes.UpdateStory: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case StoryActions.StoryActionTypes.DeleteStory: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
