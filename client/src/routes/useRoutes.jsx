import { Routes, Route } from "react-router-dom";
import { authRoutes } from "./path";

export const useRoutes = (isAuth) => {
  return (
    <Routes>
      {!isAuth &&
        authRoutes.map((item) => (
          <Route path={item.path} element={item.element} key={item.key} />
        ))}
    </Routes>
  );
};
