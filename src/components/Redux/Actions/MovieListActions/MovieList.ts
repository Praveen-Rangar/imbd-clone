import { PopulerData } from "../../../modules/PopulerData";
import { ActionCreater } from "../Index";

export const MOVIE_LIST_A = "MOVIE_LIST_A";

export const MovieListAction: ActionCreater<PopulerData[]> = (
  MovieList: PopulerData[]
) => ({
  type: MOVIE_LIST_A,
  payload: MovieList,
});
