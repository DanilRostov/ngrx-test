import * as StoryActions from '../actions/story-actions';
import { Story } from '../models/story-models';

export interface State {
  stories: Story[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  stories: [],
  loading: false,
  error: '',
};

export function storyReducer(
  state = initialState,
  action: StoryActions.ActionsUnion
): State {
  switch (action.type) {
    case StoryActions.StoryActionTypes.LoadStories: {
      return {
        ...state,
        stories: action.payload,
      };
    }

    case StoryActions.StoryActionTypes.CreateStory: {
      return {
        ...state,
        stories: state.stories.concat(action.payload),
      };
    }

    case StoryActions.StoryActionTypes.UpdateStory: {
      return {
        ...state,
        stories: action.payload,
      };
    }

    case StoryActions.StoryActionTypes.DeleteStory: {
      return {
        ...state,
        stories: action.payload,
      };
    }
 
    default: {
      return state;
    }
  }
}