import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  isAuth: boolean
}

const ProtectedRoute = ({ children, isAuth }: Props) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
