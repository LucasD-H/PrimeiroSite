import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    data: { title: '' },
  },
  {
    path: 'sobre',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    data: { title: 'Sobre' },
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio').then((m) => m.Portfolio),
    data: { title: 'Portfolio' },
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    data: { title: 'Contato' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
