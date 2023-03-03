import { ActionCreater } from "../Index";
import { MovieDetailsModule } from "../../../modules/MovieDetailsModule";

export const MOVIE_DETAILS_AC = "MOVIE_DETAILS_AC";

export const MovieDetailsAction: ActionCreater<MovieDetailsModule> = (
  MovieDetails: MovieDetailsModule
) => ({
  type: MOVIE_DETAILS_AC,
  payload: MovieDetails,
});
