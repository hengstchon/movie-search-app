import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../../interfaces/movie';
import { MovieListComponent } from '../shared/movie-list/movie-list.component';
import { WatchlistService } from '../../services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterLink, MovieListComponent],
  templateUrl: './watchlist.component.html',
})
export class WatchlistComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.loadWatchlist();
  }

  loadWatchlist() {
    this.movies = this.watchlistService.getWatchlist();
  }

  getMovieAction = (movie: Movie) => {
    return { text: 'Remove', class: 'bg-red-500 hover:bg-red-600' };
  };

  onMovieAction = (movie: Movie) => {
    this.watchlistService.removeFromWatchlist(movie);
    this.loadWatchlist();
  };
}
