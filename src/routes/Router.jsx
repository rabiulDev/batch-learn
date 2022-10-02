import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import StudentRegister from "../pages/StudentRegister";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register-student" element={<StudentRegister />} />
    </Routes>
  );
};

export default Router;
