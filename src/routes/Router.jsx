import React from "react";
import { Route, Routes } from "react-router-dom";
import Calender from "../components/Calender";
import ProtectedRoute from "../components/ProtectedRoute";
import Billings from "../pages/Billings";
import ClassRoom from "../pages/ClassRoom";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SessionHistory from "../pages/SessionHistory";
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
      >
        <Route index element={<Calender />} />
        <Route path="classroom/:id" element={<ClassRoom/>} />
        <Route path="session-history" element={<SessionHistory />} />
        <Route path="profile" element={<Profile />} />
        <Route path="billings" element={<Billings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register-student" element={<StudentRegister />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Router;
