import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Authcontext";

const WithPrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/signIn" />;
};

export default WithPrivateRoute;