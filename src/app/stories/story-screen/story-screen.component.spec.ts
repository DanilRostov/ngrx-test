import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryScreenComponent } from './story-screen.component';

describe('StoryScreenComponent', () => {
  let component: StoryScreenComponent;
  let fixture: ComponentFixture<StoryScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
