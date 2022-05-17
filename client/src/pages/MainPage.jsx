import authService from "../services/authService";
import { logOut } from "../redux/actions/logOut";
import { useDispatch } from "react-redux";

export const MainPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={async () => {
          const res = await authService.logOut();
          dispatch(logOut(res));
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};
