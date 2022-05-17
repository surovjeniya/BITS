import { CHECK_AUTH, LOADED, LOADING } from "../types";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const checkAuth = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    const res = await axios
      .get(`${BASE_URL}/auth/refresh`, { withCredentials: true })
      .then((res) => res.data)
      .catch((e) => e.response.data);
    dispatch({
      type: CHECK_AUTH,
      payload: res,
    });
    dispatch({
      type: LOADED,
    });
  };
};
