import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="m-5 text-center">
      <input
        type="text"
        [(ngModel)]="searchTerm"
        placeholder="Enter movie name to search..."
        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button
        class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>

    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 p-5"
      *ngIf="movies.length"
    >
      <div
        class="border border-gray-200 p-2.5 text-center rounded-lg"
        *ngFor="let movie of movies"
      >
        <img
          [src]="movie.Poster"
          [alt]="movie.Title"
          *ngIf="movie.Poster !== 'N/A'"
          class="w-full h-auto"
        />
        <div class="mt-2">
          <h3 class="text-lg font-semibold">{{ movie.Title }}</h3>
          <p class="text-gray-600">{{ movie.Year }}</p>
          <button
            [routerLink]="['/movie', movie.imdbID]"
            class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
          >
            View Details
          </button>
          <button
            class="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full"
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {
  searchTerm = '';
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}
}
