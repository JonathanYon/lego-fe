import { AnyAction } from "redux";
import { SETS, ERROR_SETS, LOADING_SETS } from "../action";
import { initialState } from "../store";

export const setsReducer = (state = initialState.sets, action: AnyAction) => {
  switch (action.type) {
    case SETS:
      return {
        ...state,
        data: action.payload,
      };
    case ERROR_SETS:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING_SETS:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
