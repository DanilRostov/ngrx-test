import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor() { }

  public getInitialStories() {
    return [
      { name: 'name1', id: 'id1', text: 'text1' },
      { name: 'name2', id: 'id2', text: 'text2' },
      { name: 'name3', id: 'id3', text: 'text3' },
      { name: 'name4', id: 'id4', text: 'text4' },
      { name: 'name5', id: 'id5', text: 'text5' },
    ];
  }
}
