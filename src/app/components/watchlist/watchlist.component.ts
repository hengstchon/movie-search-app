import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../../interfaces/movie';
import { MovieCardComponent } from '../shared/movie-card/movie-card.component';
import { WatchlistService } from '../../services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterLink, MovieCardComponent],
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

  removeFromWatchlist(movie: Movie) {
    this.watchlistService.removeFromWatchlist(movie);
    this.loadWatchlist();
  }
}
