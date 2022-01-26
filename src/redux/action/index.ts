import { Dispatch } from "redux";
import {
  MinifigDetails,
  ReduxStore,
  SetsDetails,
} from "../../types/reduxStore";

export const SETS = "SETS";
export const ERROR_SETS = "ERROR_SETS";
export const LOADING_SETS = "LOADING_SETS";
export const MINI = "MINI";
export const ERROR_MINI = "ERROR_MINI";
export const LOADING_MINI = "LOADING_MINI";
export const PARTS = "PARTS";
export const ERROR_PARTS = "ERROR_PARTS";
export const LOADING_PARTS = "LOADING_PARTS";
export const TOGGLE_SETS = "TOGGLE_SETS";

export const getMiniFigs = () => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/minifigs`, {
        headers: {
          Authorization: `Key ${process.env.REACT_APP_KEY}`,
        },
      });
      if (response.ok) {
        const res = await response.json();
        console.log(res.results.slice(0, 12));
        dispatch({
          type: LOADING_MINI,
          payload: false,
        });
        dispatch({
          type: MINI,
          payload: res.results,
        });
      } else {
        dispatch({
          type: LOADING_MINI,
          payload: false,
        });
        dispatch({
          type: ERROR_MINI,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: LOADING_MINI,
        payload: false,
      });
      console.log(error);
      dispatch({
        type: ERROR_MINI,
        payload: true,
      });
    }
  };
};

// Sets

// export const getSets = () => {
export const getSets = (
  search: string,
  minYear: string,
  maxYear: string,
  minPart: string,
  maxPart: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/sets?page=2${
          search && "&search=" + search
        }${minYear && "&min_year=" + minYear}${
          maxYear && "&max_year=" + maxYear
        }${minPart && "&min_parts=" + minPart}${
          maxPart && "&max_parts=" + maxPart
        }`,
        {
          headers: {
            Authorization: `Key ${process.env.REACT_APP_KEY}`,
          },
        }
      );
      if (response.ok) {
        const res = await response.json();
        console.log("sets", res.results.slice(0, 12));
        dispatch({
          type: LOADING_SETS,
          payload: false,
        });
        dispatch({
          type: SETS,
          payload: res.results,
        });
      } else {
        dispatch({
          type: LOADING_SETS,
          payload: false,
        });
        dispatch({
          type: ERROR_SETS,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: LOADING_SETS,
        payload: false,
      });
      console.log(error);
      dispatch({
        type: ERROR_SETS,
        payload: true,
      });
    }
  };
};

export const toggleFav = (data: SetsDetails | MinifigDetails) => ({
  type: TOGGLE_SETS,
  payload: data,
});
