import { Routes } from '@angular/router';
import { MoviesComponent } from './shared/components/movies/movies.component';
import { DetailedViewComponent } from './shared/components/detailed-view/detailed-view.component';
import { TvShowsComponent } from './features/tv-shows/tv-shows.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App TV Shows',
        component: TvShowsComponent,
      },
      {
        path: 'movies',
        title: 'App Movies',
        component: MoviesComponent,
      },
      { path: ':mediaId', 
        component: DetailedViewComponent },
];
