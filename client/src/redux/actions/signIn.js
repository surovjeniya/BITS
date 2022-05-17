import { SIGN_IN } from "../types";

export const signIn = (data) => {
  return {
    type: SIGN_IN,
    payload: data,
  };
};
