import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../interfaces/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
  @Input() emptyMessage = 'No movies found';
  @Input() getMovieAction!: (movie: Movie) => { text: string; class: string };
  @Input() onMovieAction!: (movie: Movie) => void;
}
