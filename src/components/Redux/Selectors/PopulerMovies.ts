import { createSelector } from "reselect";
import { State } from "../Store";

const PopulerMoviesStateSelector = (state: State) => state.PopulerM;

export const PopulerMoviesSelector = createSelector(
  PopulerMoviesStateSelector,
  (state) => state.PopulerMovies
);
