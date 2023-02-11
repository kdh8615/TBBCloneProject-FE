import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <AllLayOut>
      <Header />
      <Outlet>{children}</Outlet>
      <Footer />
    </AllLayOut>
  );
};
export default Layout;

const AllLayOut = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
