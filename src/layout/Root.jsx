import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const Root = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
