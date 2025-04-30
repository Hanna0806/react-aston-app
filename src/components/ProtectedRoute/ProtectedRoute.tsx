import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { usersSelector } from "../../redux/slices/usersSlice";
import { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { activeUser } = useSelector(usersSelector);

  if (!activeUser) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }

  return  <>{children}</>;
};
