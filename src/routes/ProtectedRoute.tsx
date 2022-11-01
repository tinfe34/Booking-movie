import { useAppSelector } from "hooks/store";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
