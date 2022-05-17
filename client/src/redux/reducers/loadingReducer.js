import { LOADED, LOADING } from "../types";

const initState = {
  loading: false,
};

export const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
