import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "../providers/UserContext";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoardPage } from "../pages/DashboardPage";

export const RoutesMain = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  );
};
