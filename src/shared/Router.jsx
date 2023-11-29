import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout/Layout";
import Letter from "../pages/Letter";
import Detail from "../pages/Detail";
import Profile from "pages/Profile";
import Login from "pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
        <Route path="/letter/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
