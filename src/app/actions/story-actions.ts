import { Action } from '@ngrx/store';
import { Story } from '../models/story-models';

export enum StoryActionTypes {
  LoadStories = '[Story] Load stories',
  CreateStory = '[Story] Create story',
  UpdateStory = '[Story] Update story',
  DeleteStory = '[Story] Delete story',
}

export class LoadStories implements Action {
  readonly type = StoryActionTypes.LoadStories;

  constructor(public payload: Story[]) {}
}
 
export class CreateStory implements Action {
  readonly type = StoryActionTypes.CreateStory;

  constructor(public payload: Story) {}
}
 
export class UpdateStory implements Action {
  readonly type = StoryActionTypes.UpdateStory;

  constructor(public payload: Story[]) {}
}

export class DeleteStory implements Action {
  readonly type = StoryActionTypes.DeleteStory;

  constructor(public payload: Story[]) {}
}

export type ActionsUnion = 
  | LoadStories
  | CreateStory
  | UpdateStory
  | DeleteStory;