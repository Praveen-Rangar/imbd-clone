import { createSelector } from "reselect";
import { State } from "../Store";

const MoviesDetailsStateSelector = (state: State) => state.MovieDetails;

export const MoviesDetailsSelector = createSelector(
  MoviesDetailsStateSelector,
  (state) => state.MovieDetails
);
