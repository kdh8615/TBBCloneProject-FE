import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Planning from "../pages/Planning";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Layout from "./Layoout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="planning" element={<Planning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
