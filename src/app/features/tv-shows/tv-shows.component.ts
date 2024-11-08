import { Component } from '@angular/core';
import { TmdbApiService } from '../../core/services/tmdb-api.service';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.scss'
})

export class TvShowsComponent {

  constructor(private api: TmdbApiService) {}

  topRatedTvShows: any[] = [];

  ngOnInit() {
    this.fetchTopRated()
  }

  fetchTopRated(): void {
    this.api.getTopRated(1, 'tv').subscribe({
      next: (response) => {
        this.topRatedTvShows = response.results.map((item: any) => ({
            imgSrc: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
            ...item,
            rating: Math.floor(item.vote_average * 10 * 100) * 0.01,
        }));
        console.log(this.topRatedTvShows)
      },
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      },
      complete: () => {
        console.log('Data fetch complete.');
      }
    })
  }


}
