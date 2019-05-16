import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { 
  Increment, 
  Decrement, 
  Reset,
} from '../../actions/counter-actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>,
  ) {
    this.count$ = store.pipe(select('count'));
   }

  public increment() {
    this.store.dispatch(new Increment());
  }
 
  public decrement() {
    this.store.dispatch(new Decrement());
  }
 
  public reset() {
    this.store.dispatch(new Reset());
  }
}
