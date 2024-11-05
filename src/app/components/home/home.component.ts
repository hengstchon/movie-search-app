import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Movie } from '../../interfaces/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieCardComponent } from '../shared/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MovieCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private watchlistService: WatchlistService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['q']) {
        this.searchTerm = params['q'];
        this.performSearch();
      }
    });
  }

  searchMovies() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.searchTerm },
      queryParamsHandling: 'merge',
    });

    this.performSearch();
  }

  private performSearch() {
    if (this.searchTerm.trim()) {
      this.movieService.searchMovies(this.searchTerm).subscribe((response) => {
        if (response.Response === 'True') {
          this.movies = response.Search;
        } else {
          this.movies = [];
        }
      });
    }
  }

  addToWatchlist(movie: Movie) {
    this.watchlistService.addToWatchlist(movie);
  }
}
