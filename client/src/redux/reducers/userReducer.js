import { SIGN_IN, CHECK_AUTH, LOG_OUT } from "../types";

const initState = {
  userData: {},
  isAuth: false,
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.tokens.accessToken)
      );
      return {
        ...state,
        userData: action.payload.userData,
        isAuth: true,
      };
    case CHECK_AUTH:
      if (action.payload.hasOwnProperty("tokens")) {
        localStorage.setItem(
          "token",
          JSON.stringify(action.payload.tokens.accessToken)
        );
        return {
          ...state,
          isAuth: true,
          userData: action.payload.userData,
        };
      }
    case LOG_OUT:
      localStorage.removeItem("token");
      console.log(action.payload);
      return {
        ...state,
        isAuth: false,
        userData: {},
      };
    default:
      return state;
  }
};
