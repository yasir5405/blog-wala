import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.status);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
