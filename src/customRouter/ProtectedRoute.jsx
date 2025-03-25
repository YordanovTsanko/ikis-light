import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = true

  return <>{children}</>;
};

export default ProtectedRoute;
