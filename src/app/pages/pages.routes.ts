import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1'
  },
  {
    path: ':pageNumber',
    loadComponent: () => import('./pages.component').then((c) => c.PagesComponent),
  }
];
