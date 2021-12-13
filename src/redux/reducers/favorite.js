import { initialState } from "../store";
import { TOGGLE_SETS } from "../action";

export const favReducer = (state = initialState.fav, action) => {
  switch (action.type) {
    case TOGGLE_SETS:
      return {
        ...state,

        liked: state.liked.includes(action.payload)
          ? state.liked
              .slice(0, state.liked.indexOf(action.payload))
              .concat(
                state.liked.slice(
                  state.liked.indexOf(action.payload) + 1,
                  state.liked.length
                )
              )
          : state.liked.concat(action.payload),
      };

    default:
      return state;
  }
};
