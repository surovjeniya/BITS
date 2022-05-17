import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { loadingReducer } from "./reducers/loadingReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  loader: loadingReducer,
});
