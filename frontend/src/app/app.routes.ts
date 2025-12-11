import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'hello', loadComponent: () => import('./hello/hello').then(m => m.HelloComponent) },
];
