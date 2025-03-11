import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./components/main/ProtectedRoute";
import BusinessDashboard from "./pages/businessClient/BusinessDashboard";
import Dashboard from "./pages/client/Dashboard";
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

  const shouldHideNavbar = location.pathname.startsWith("/sign");

  return (
    <div className=" bg-gray-300 min-h-screen">
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/dashboard/admin/*"
          element={
            <ProtectedRoute requiredRole="buser">
              <BusinessDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute requiredRole="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </div>
  );
};

export default App;
