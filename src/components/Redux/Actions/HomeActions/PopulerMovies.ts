import { PopulerData } from "../../../modules/PopulerData";
import { ActionCreater } from "../Index";

export const POPULER_MOVIES_A = "POPULER_MOVIES_A";

export const PopulerMoviesAction: ActionCreater<PopulerData[]> = (
  PopulerMovies: PopulerData[]
) => ({
  type: POPULER_MOVIES_A,
  payload: PopulerMovies,
});
