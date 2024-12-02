import { Component } from '@angular/core';
import { PostsComponent } from '../posts.component';

@Component({
  selector: 'app-exercise-posts',
  standalone: true,
  imports: [PostsComponent],
  template: `<app-posts [postType]="'exercise'"></app-posts>`,
})
export class ExercisePostsComponent {}
