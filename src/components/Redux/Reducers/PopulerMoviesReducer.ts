import produce from "immer";
import { AnyAction } from "redux";
import { PopulerData } from "../../modules/PopulerData";
import { POPULER_MOVIES_A } from "../Actions/HomeActions/PopulerMovies";
import { Action } from "../Actions/Index";

type State = {
  PopulerMovies: PopulerData[];
};

export const initialState: State = {
  PopulerMovies: [],
};

function PopulerMoviesReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case POPULER_MOVIES_A:
      return produce(state, (draft) => {
        draft.PopulerMovies = action.payload;
      });

    default:
      return state;
  }
}

export default PopulerMoviesReducer;
