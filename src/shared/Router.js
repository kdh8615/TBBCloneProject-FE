import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Planning from "../pages/Planning";
import Layout from "./Layoout";

function Router(){
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="planning" element={<Planning />} />
            
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router;