import produce from "immer";
import { AnyAction } from "redux";
import { PopulerData } from "../../modules/PopulerData";
import { Action } from "../Actions/Index";
import { MOVIE_LIST_A } from "../Actions/MovieListActions/MovieList";

export type State = {
  MoviesList: PopulerData[];
};

export const initialState: State = {
  MoviesList: [],
};

function MoviesListReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case MOVIE_LIST_A:
      return produce(state, (draft) => {
        draft.MoviesList = action.payload;
      });

    default:
      return state;
  }
}

export default MoviesListReducer;
