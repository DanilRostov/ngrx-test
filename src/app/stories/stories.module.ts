import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { storyReducer } from '../reducers/story-reducer';
import { StoryScreenComponent } from './story-screen/story-screen.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { StoreModule, ActionReducerMap  } from '@ngrx/store';
import { tripsReducer } from '../reducers/trips-reducer';

export const reducers: ActionReducerMap<any> = {
  stories: storyReducer,
  trips: tripsReducer,
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('travels', reducers)
  ],
  declarations: [StoryPageComponent, StoryScreenComponent],
})
export class StoriesModule { }
