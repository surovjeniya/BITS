import { AuthPage } from "../pages/AuthPage";
import { Navigate } from "react-router-dom";

const AUTH_PAGE = "/auth";

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
