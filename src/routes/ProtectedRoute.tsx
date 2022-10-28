import { RootState } from "configStore";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
    children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
    const { user } = useSelector((state: RootState) => state.auth);

    if (!user) {
        // Chưa đăng nhập
        return <Navigate to="/login" />;
    }

    // đã đăng nhập
    return children;
};

export default ProtectedRoute;
