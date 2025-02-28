import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.status);

  return isAuthenticated ? <Navigate to="/" replace /> : element;
};

export default PublicRoute;
