import { Routes } from '@angular/router';

export const routes: Routes = [{ path: '', redirectTo: '/landing', pathMatch: 'full' },
    {path: 'landing',loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)},
    {path: 'cricket',loadComponent: () => import('./cricket/cricket.component').then(m => m.CricketComponent)},
    {path: 'home',loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'exch',loadComponent: () => import('./exch/exch.component').then(m => m.ExchComponent)},
    {path: 'inplay',loadComponent: () => import('./inplay/inplay.component').then(m => m.InplayComponent)},
    {path: 'tennis',loadComponent: () => import('./tennis/tennis.component').then(m => m.TennisComponent)}
];
