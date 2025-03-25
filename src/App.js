import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./customRouter/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Navbar from "./components/main/Navbar";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Footer from "./components/main/Footer";

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const shouldHideNavbar = location.pathname.startsWith("/sign");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false);

    const handleStorageChange = (event) => {
      if (event.key === "token") {
        setToken(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="bg-gray-300 min-h-screen">
      {!shouldHideNavbar && <Navbar token={token} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn token={token} />} />
        <Route path="/sign-up" element={<SignUp token={token} />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </div>
  );
};

export default App;
