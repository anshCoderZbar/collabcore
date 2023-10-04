import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./private";
import { Dashboard } from "pages/dashboard";
import { PublicRoute } from "./public";
import { Chat } from "pages/chat";
import { Projects } from "pages/projects";
import { SingleProject } from "pages/projects/SingleProject";
import { Calander } from "pages/calander";
import { Insights } from "pages/insights";
import { Login } from "pages/auth/Login";
import { SignUp } from "pages/auth/SignUp";
import { Onboarding } from "pages/onboarding";

export const AllRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoutes>
              <Projects />
            </PrivateRoutes>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PrivateRoutes>
              <SingleProject />
            </PrivateRoutes>
          }
        />
        <Route
          path="/messages"
          element={
            <PrivateRoutes>
              <Chat />
            </PrivateRoutes>
          }
        />
        <Route
          path="/calander"
          element={
            <PrivateRoutes>
              <Calander />
            </PrivateRoutes>
          }
        />
        <Route
          path="/insights"
          element={
            <PrivateRoutes>
              <Insights />
            </PrivateRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted={props?.auth}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-in"
          element={
            <PublicRoute restricted={props?.auth}>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/account-setup"
          element={
            <PublicRoute restricted={props?.auth}>
              <Onboarding />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
