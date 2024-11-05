import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { WatchlistService } from '../../services/watchlist.service';
import { MovieDetail } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie?: MovieDetail;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private watchlistService: WatchlistService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService
        .getMovieDetails(id)
        .subscribe((movie) => (this.movie = movie));
    }
  }

  getWatchlistAction() {
    return this.movie && this.watchlistService.isInWatchlist(this.movie)
      ? {
          text: 'Remove from Watchlist',
          class: 'bg-red-500 hover:bg-red-600',
        }
      : {
          text: 'Add to Watchlist',
          class: 'bg-green-500 hover:bg-green-600',
        };
  }

  onWatchlistAction() {
    if (this.movie) {
      if (this.watchlistService.isInWatchlist(this.movie)) {
        this.watchlistService.removeFromWatchlist(this.movie);
      } else {
        this.watchlistService.addToWatchlist(this.movie);
      }
    }
  }
}
