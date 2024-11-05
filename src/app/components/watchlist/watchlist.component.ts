import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './watchlist.component.html',
})
export class WatchlistComponent implements OnInit {
  movies: Movie[] = [];

  ngOnInit() {
    this.loadWatchlist();
  }

  loadWatchlist() {
    this.movies = JSON.parse(localStorage.getItem('watchlist') || '[]');
  }

  removeFromWatchlist(movie: Movie) {
    this.movies = this.movies.filter((m) => m.imdbID !== movie.imdbID);
    localStorage.setItem('watchlist', JSON.stringify(this.movies));
  }
}
