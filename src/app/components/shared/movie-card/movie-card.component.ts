import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../../../interfaces/movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() actionButtonText = 'Add to Watchlist';
  @Input() actionButtonClass = 'bg-green-500 hover:bg-green-600';
  @Output() actionClick = new EventEmitter<Movie>();

  onActionClick() {
    this.actionClick.emit(this.movie);
  }
}

