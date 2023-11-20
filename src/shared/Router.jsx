import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Letter from "../pages/Letter";
import DetailLetter from "../pages/DetailLetter";
const fakeData = require("../fakeData.json");

const Router = () => {
  const [letterList, setLetterList] = useState(fakeData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route
            path="/letter"
            element={
              <Letter letterList={letterList} setLetterList={setLetterList} />
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
        <Route
          path="/letter/:id"
          element={<DetailLetter letterList={letterList} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
