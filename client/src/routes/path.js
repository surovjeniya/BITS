import { AuthPage } from "../pages/AuthPage";
import { MainPage } from "../pages/MainPage";
import { Navigate } from "react-router-dom";

const AUTH_PAGE = "/auth";
const MAIN_PAGE = "/";

export const authRoutes = [
  {
    path: AUTH_PAGE,
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to={AUTH_PAGE} replace />,
  },
];

export const appRoutes = [
  {
    path: MAIN_PAGE,
    element: <MainPage />,
  },
  {
    path: "*",
    element: <Navigate to={MAIN_PAGE} replace />,
  },
];
