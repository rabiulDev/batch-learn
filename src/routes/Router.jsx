import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import StudentRegister from "../pages/StudentRegister";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register-student" element={<StudentRegister />} />
    </Routes>
  );
};

export default Router;
