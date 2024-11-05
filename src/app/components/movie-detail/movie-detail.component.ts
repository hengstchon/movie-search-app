import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
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
