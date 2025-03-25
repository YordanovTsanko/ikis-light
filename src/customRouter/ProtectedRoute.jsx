import React, { useEffect, useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [fetched, setFetched] = useState(false);
  const hasFetchedUser = useRef(false);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (!tokenFromStorage) {
      navigate("/sign-in", { replace: true });
      return;
    }
    if (!hasFetchedUser.current) {
      setFetched(true);
      hasFetchedUser.current = true;
    }
  }, [dispatch, navigate]);

  if (!fetched) {
    return (
      <div className="flex justify-center items-center bg-gray-800 text-primary-dark h-screen"></div>
    );
  }

  return React.cloneElement(children, { user: user });
};

export default ProtectedRoute;
