import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlistKey = 'watchlist';

  addToWatchlist(movie: Movie | MovieDetail): void {
    const watchlist = this.getWatchlist();
    if (!this.isInWatchlist(movie)) {
      watchlist.push(movie);
      localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
      alert(`Added movie: '${movie.Title}' to watchlist!`);
    } else {
      alert(`Movie '${movie.Title}' is already in watchlist!`);
    }
  }

  removeFromWatchlist(movie: Movie): void {
    if (
      confirm(
        `Are you sure you want to remove '${movie.Title}' from watchlist?`,
      )
    ) {
      const watchlist = this.getWatchlist().filter(
        (m) => m.imdbID !== movie.imdbID,
      );
      localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
      alert(`Removed '${movie.Title}' from watchlist!`);
    }
  }

  getWatchlist(): Movie[] {
    return JSON.parse(localStorage.getItem(this.watchlistKey) || '[]');
  }

  isInWatchlist(movie: Movie | MovieDetail): boolean {
    return this.getWatchlist().some((m) => m.imdbID === movie.imdbID);
  }
}
