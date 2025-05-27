import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom'
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <div>
          <Header />
          <Navbar />
          <Outlet />
          <Footer/>
    </div>
  );
};

export default Layout;
