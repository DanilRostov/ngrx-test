import * as StoryActions from '../actions/story-actions';
import { Story } from '../models/story-models';
import { createSelector } from '@ngrx/store';

export interface StoriesState {
  data: Story[];
  loading: boolean;
  error: string;
}

export const initialStoriesState: StoriesState = {
  data: [],
  loading: false,
  error: '',
};

export function storyReducer(
  state = initialStoriesState,
  action: StoryActions.ActionsUnion
): StoriesState {
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
