import { combineReducers, createStore } from "redux";
import MovieDetailsReducer from "./Reducers/MovieDetailsReducer";
import MoviesListReducer from "./Reducers/MovieListReducer";
import PopulerMoviesReducer from "./Reducers/PopulerMoviesReducer";

const reducer = combineReducers({
  PopulerM: PopulerMoviesReducer,
  MoviesList: MoviesListReducer,
  MovieDetails: MovieDetailsReducer,
});

export type State = ReturnType<typeof reducer>;

const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
