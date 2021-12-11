import { MINI, ERROR_MINI, LOADING_MINI } from "../action";
import { initialState } from "../store";

export const miniReducer = (state = initialState.minifigs, action) => {
  switch (action.type) {
    case MINI:
      return {
        ...state,
        data: action.payload,
      };
    case ERROR_MINI:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING_MINI:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
