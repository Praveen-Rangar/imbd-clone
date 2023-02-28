export type MovieDetailsModule = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  genres: [{ id: number; name: string }];
  production_companies: [{ logo_path: string; name: string }];
  tagline: string;
  imdb_id: string;
  budget: number;
  id: number;
  popularity: number;
  poster_path: string;
  original_title: string;
  overview: string;
  homepage: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
};
