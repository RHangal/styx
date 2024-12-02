import { Component } from '@angular/core';
import { PostsComponent } from '../posts.component';

@Component({
  selector: 'app-dog-posts',
  standalone: true,
  imports: [PostsComponent],
  template: `<app-posts [postType]="'dogs'"></app-posts>`,
})
export class DogPostsComponent {}
