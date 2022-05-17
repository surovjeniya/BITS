import { useRoutes } from "./routes/useRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./redux/actions/checkAuth";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const isAuth = useSelector((state) => state.user.isAuth);
  const routes = useRoutes(isAuth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <Router>
      <div className="App">{!loading && routes}</div>
    </Router>
  );
}

export default App;
