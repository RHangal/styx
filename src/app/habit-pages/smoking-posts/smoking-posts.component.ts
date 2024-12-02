import { Component } from '@angular/core';
import { PostsComponent } from '../posts.component';

@Component({
  selector: 'app-smoking-posts',
  standalone: true,
  imports: [PostsComponent],
  template: `<app-posts [postType]="'smoking'"></app-posts>`,
})
export class SmokingPostsComponent {}
