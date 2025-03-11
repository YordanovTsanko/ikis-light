import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./components/main/ProtectedRoute";
import BusinessDashboard from "./pages/businessClient/BusinessDashboard";
import Dashboard from "./pages/client/Dashboard";
import Navbar from "./components/main/Navbar";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  return (
    <main className=" bg-gray-300 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/dashboard/admin/*"
          element={
            <ProtectedRoute requiredRole="admin">
              <BusinessDashboard />
            </ProtectedRoute>
          }
          exact
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute requiredRole="user">
              <Dashboard />
            </ProtectedRoute>
          }
          exact
        />
      </Routes>
    </main>
  );
};

export default App;
