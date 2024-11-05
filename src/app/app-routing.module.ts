import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  // {
  //   path: 'watchlist',
  //   loadComponent: () =>
  //     import('./components/watchlist/watchlist.component').then(
  //       (m) => m.WatchlistComponent,
  //     ),
  // },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./components/movie-detail/movie-detail.component').then(
        (m) => m.MovieDetailComponent,
      ),
  },
];
