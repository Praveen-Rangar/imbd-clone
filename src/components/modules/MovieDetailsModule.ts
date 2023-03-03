export type MovieDetailsModule = {
  backdrop_path: string;

  genres: [{ id: number; name: string }];
  production_companies: [{ logo_path: string; name: string }];
  tagline: string;
  imdb_id: string;

  poster_path: string;
  original_title: string;
  overview: string;
  homepage: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
};
