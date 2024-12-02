import { Component } from '@angular/core';
import { PostsComponent } from '../posts.component';

@Component({
  selector: 'app-cooking-posts',
  standalone: true,
  imports: [PostsComponent],
  template: `<app-posts [postType]="'cooking'"></app-posts>`,
})
export class CookingPostsComponent {}
