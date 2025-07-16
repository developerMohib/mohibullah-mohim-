import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("adminToken");
    if (isAuthenticated) {
        return <Navigate to="/admin-login" state={{ from: location }} replace={true} />;
    }
    return children
};

export default ProtectedRoute;