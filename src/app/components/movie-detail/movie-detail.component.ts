import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieDetail } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-5 flex gap-5" *ngIf="movie">
      <img
        [src]="movie.Poster"
        [alt]="movie.Title"
        *ngIf="movie.Poster !== 'N/A'"
        class="max-w-[300px] h-auto"
      />
      <div class="flex-1">
        <h1>{{ movie.Title }}</h1>
        <p><strong>Year:</strong> {{ movie.Year }}</p>
        <p><strong>Director:</strong> {{ movie.Director }}</p>
        <p><strong>Actors:</strong> {{ movie.Actors }}</p>
        <p><strong>Rating:</strong> {{ movie.imdbRating }}</p>
        <p><strong>Plot:</strong> {{ movie.Plot }}</p>
        <button (click)="addToWatchlist(movie)">Add to Watchlist</button>
      </div>
    </div>
  `,
  styles: [],
})
export class MovieDetailComponent implements OnInit {
  movie?: MovieDetail;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService
        .getMovieDetails(id)
        .subscribe((movie) => (this.movie = movie));
    }
  }

  addToWatchlist(movie: MovieDetail) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    if (!watchlist.some((m: MovieDetail) => m.imdbID === movie.imdbID)) {
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      alert('Added to watchlist!');
    } else {
      alert('Movie is already in watchlist!');
    }
  }
}
