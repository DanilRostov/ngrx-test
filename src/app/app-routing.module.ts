import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { RootPageComponent } from './components/root-page/root-page.component';
import { StoryPageComponent } from './stories/story-page/story-page.component';

const routes: Routes = [
  { path: '', component: RootPageComponent },
  { path: 'stories', component: StoryPageComponent },
  { path: 'counter', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
