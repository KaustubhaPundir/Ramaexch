import { Routes } from '@angular/router';

export const routes: Routes = [{ path: '', redirectTo: '/landing', pathMatch: 'full' },
    {path: 'landing',loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)},
    {path: 'home',loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)}
];
