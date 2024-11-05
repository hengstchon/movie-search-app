import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // Check if there's a search term in the URL
    this.route.queryParams.subscribe((params) => {
      if (params['q']) {
        this.searchTerm = params['q'];
        this.performSearch();
      }
    });
  }

  searchMovies() {
    // Update URL with search term
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
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    if (!watchlist.some((m: Movie) => m.imdbID === movie.imdbID)) {
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      alert('Added to watchlist!');
    } else {
      alert('Movie is already in watchlist!');
    }
  }
}
