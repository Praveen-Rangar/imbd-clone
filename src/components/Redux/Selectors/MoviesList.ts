import { createSelector } from "reselect";
import { State } from "../Store";

const MoviesListStateSelector = (state: State) => state.MoviesList;

export const MoviesListSelector = createSelector(
  MoviesListStateSelector,
  (state) => state.MoviesList
);
