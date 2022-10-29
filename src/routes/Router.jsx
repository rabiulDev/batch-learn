import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Calender from "../components/Calender";
import ProtectedRoute from "../components/ProtectedRoute";
import Billings from "../pages/Billings";
import ClassRoom from "../pages/ClassRoom";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Payouts from "../pages/Payouts";
import Profile from "../pages/Profile";
import SessionHistory from "../pages/SessionHistory";
import StudentRegister from "../pages/StudentRegister";
import TeacherRegister from "../pages/TeacherRegister";

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
        <Route path="payouts" element={<Payouts />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register-student" element={<StudentRegister />} />
      <Route path="/register-teacher" element={<TeacherRegister/>}/>
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  );
};

export default Router;
