import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'team',
    loadComponent: () =>
      import('./shared/components/ui/team/team.component').then(
        (c) => c.TeamComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./shared/components/ui/projects/projects.component').then(
        (c) => c.ProjectsComponent
      ),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./shared/components/ui/calendar/calendar.component').then(
        (c) => c.CalendarComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./shared/components/ui/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/components/list/list.component').then(
        (c) => c.ListComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/ui/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/ui/notFound/notFound.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
