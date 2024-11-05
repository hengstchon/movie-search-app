export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetail extends Movie {
  Plot: string;
  Director: string;
  Actors: string;
  Rating: string;
  imdbRating: string;
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
