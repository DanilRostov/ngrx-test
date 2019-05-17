import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Story } from 'src/app/models/story-models';

@Component({
  selector: 'app-story-screen',
  templateUrl: './story-screen.component.html',
  styleUrls: ['./story-screen.component.scss']
})
export class StoryScreenComponent implements OnInit, OnDestroy {
  public stories: Story[];
  public subscriptions = new Subscription();

  constructor(
    private store: Store<{ count: number }>,
  ) { }

  public ngOnInit() {
    // this.subscriptions.add(this.store.pipe(select(getStories)).subscribe((stories) => {
    //   this.stories = stories;
    // }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
