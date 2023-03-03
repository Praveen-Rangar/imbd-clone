import produce from "immer";
import { AnyAction } from "redux";
import { MovieDetailsModule } from "../../modules/MovieDetailsModule";
import { Action } from "../Actions/Index";
import { MOVIE_DETAILS_AC } from "../Actions/MovieDetailsActions/MovieDetials";

export type State = {
  MovieDetails: MovieDetailsModule;
};

export const initialState: State = {
  MovieDetails: {
    backdrop_path: "",

    genres: [{ id: 0, name: "" }],
    production_companies: [{ logo_path: "", name: "" }],
    tagline: "",
    imdb_id: "",

    poster_path: "",
    original_title: "",
    overview: "",
    homepage: "",
    release_date: "",
    runtime: 0,
    vote_average: 0,
    vote_count: 0,
  },
};

function MovieDetailsReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case MOVIE_DETAILS_AC:
      return produce(state, (draft) => {
        draft.MovieDetails = action.payload;
      });

    default:
      return state;
  }
}

export default MovieDetailsReducer;
