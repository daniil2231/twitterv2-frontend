import { Navigate, Outlet } from "react-router-dom";
import AuthServices from "../services/AuthServices";

const UserProtectedRoutes = () => {
  const user = AuthServices.getCurrentUser();
  if (user == null) {
    return <Navigate to="/login" />;
  }

  if (user.role === "user") {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default UserProtectedRoutes;
