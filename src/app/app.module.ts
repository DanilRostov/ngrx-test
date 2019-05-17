import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './reducers/counter-reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { RootPageComponent } from './components/root-page/root-page.component';
import { StoriesModule } from './stories/stories.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RootPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoriesModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
