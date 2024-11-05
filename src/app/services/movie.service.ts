import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDetail, SearchResponse } from '../interfaces/movie';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = environment.omdbApiKey;
  private apiUrl = 'https://www.omdbapi.com/';
  private http = inject(HttpClient);

  searchMovies(searchTerm: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      `${this.apiUrl}?apikey=${this.apiKey}&s=${searchTerm}`,
    );
  }

  getMovieDetails(imdbId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `${this.apiUrl}?apikey=${this.apiKey}&i=${imdbId}`,
    );
  }
}
