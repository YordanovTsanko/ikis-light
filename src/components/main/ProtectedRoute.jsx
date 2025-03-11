import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children, requiredRole }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = true

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const parsedToken = JSON.parse(token);
      const userRole = parsedToken.role;

      if (requiredRole && userRole !== requiredRole) {
        navigate(userRole === "buser" ? "/dashboard/business" : "/dashboard", { replace: true });
        return;
      }
    } catch (error) {
      console.error("Invalid token format:", error);
      navigate("/login");
    }
  }, [token, navigate, location.pathname, requiredRole]);

  return <>{children}</>;
};

export default ProtectedRoute;
