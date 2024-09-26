import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const isAuthenticated = useAuth();
  if (isAuthenticated === null) return null;
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;