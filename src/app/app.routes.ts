import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages'
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.routes').then((r) => r.routes),
  }
];
