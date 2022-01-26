import { AnyAction } from "redux";
import { PARTS, ERROR_PARTS, LOADING_PARTS } from "../action";
import { initialState } from "../store";

export const partsReducer = (state = initialState.parts, action: AnyAction) => {
  switch (action.type) {
    case PARTS:
      return {
        ...state,
        data: action.payload,
      };
    case ERROR_PARTS:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING_PARTS:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
