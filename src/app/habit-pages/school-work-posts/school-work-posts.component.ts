import { Component } from '@angular/core';
import { PostsComponent } from '../posts.component';

@Component({
  selector: 'app-school-work-posts',
  standalone: true,
  imports: [PostsComponent],
  template: `<app-posts [postType]="'school-work'"></app-posts>`,
})
export class SchoolWorkPostsComponent {}
