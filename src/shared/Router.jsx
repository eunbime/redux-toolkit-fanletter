import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Artist from "../pages/Artist";
import Letter from "../pages/Letter";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<Artist />} />
          <Route path="/letter/:id" element={<Letter />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
