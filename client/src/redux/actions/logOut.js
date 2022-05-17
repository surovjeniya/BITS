import { LOG_OUT } from "../types";

export const logOut = (data) => {
  return {
    type: LOG_OUT,
    payload: data,
  };
};
