import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="p-5">
      <h2>My Watchlist</h2>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 mt-5"
        *ngIf="movies.length"
      >
        <div
          class="border border-gray-300 p-2.5 text-center"
          *ngFor="let movie of movies"
        >
          <img
            [src]="movie.Poster"
            [alt]="movie.Title"
            class="w-full h-auto"
            *ngIf="movie.Poster !== 'N/A'"
          />
          <div>
            <h3>{{ movie.Title }}</h3>
            <p>{{ movie.Year }}</p>
            <button [routerLink]="['/movie', movie.imdbID]">
              View Details
            </button>
            <button (click)="removeFromWatchlist(movie)">Remove</button>
          </div>
        </div>
      </div>
      <p *ngIf="!movies.length">Watchlist is empty</p>
    </div>
  `,
  styles: [],
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
