import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlistKey = 'watchlist';

  addToWatchlist(movie: Movie | MovieDetail): void {
    const watchlist = this.getWatchlist();
    if (!watchlist.some((m) => m.imdbID === movie.imdbID)) {
      watchlist.push(movie);
      localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
      alert('Added to watchlist!');
    } else {
      alert('Movie is already in watchlist!');
    }
  }

  removeFromWatchlist(movie: Movie): void {
    const watchlist = this.getWatchlist().filter(
      (m) => m.imdbID !== movie.imdbID,
    );
    localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
  }

  getWatchlist(): Movie[] {
    return JSON.parse(localStorage.getItem(this.watchlistKey) || '[]');
  }
}
