import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DogPostsComponent } from './habit-pages/dog-posts/dog-posts.component';
import { AuthGuard } from './authguard';
import { HomePageComponent } from './home-page/home-page.component';
import { CookingPostsComponent } from './habit-pages/cooking-posts/cooking-posts.component';
import { ExercisePostsComponent } from './habit-pages/exercise-posts/exercise-posts.component';
import { SchoolWorkPostsComponent } from './habit-pages/school-work-posts/school-work-posts.component';
import { SmokingPostsComponent } from './habit-pages/smoking-posts/smoking-posts.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Public route
  {
    path: 'cooking-posts',
    component: CookingPostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dog-posts',
    component: DogPostsComponent,
    canActivate: [AuthGuard], // Protect route with AuthGuard
  },
  {
    path: 'exercise-posts',
    component: ExercisePostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'school-work-posts',
    component: SchoolWorkPostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'smoking-posts',
    component: SmokingPostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shop',
    component: ShopPageComponent,
    canActivate: [AuthGuard], // Protect route with AuthGuard
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard], // Protect route with AuthGuard
  },
  {
    path: '**',
    redirectTo: '', // Default redirect to home
    pathMatch: 'full',
  },
];
