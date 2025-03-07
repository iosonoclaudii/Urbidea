import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent) },

  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent) },

  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent), canActivate: [authGuard] },

  { path: 'users', loadComponent: () => import('./pages/users/users.component').then(c => c.UsersComponent), canActivate: [authGuard] },

  { path: 'user/:id', loadComponent: () => import('./pages/user-detail/user-detail.component').then(c => c.UserDetailComponent), canActivate: [authGuard] },

  { path: 'posts', loadComponent: () => import('./pages/posts/posts.component').then(c => c.PostsComponent), canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' },
];
