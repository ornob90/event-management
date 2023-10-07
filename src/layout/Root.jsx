import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const Root = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-[90%]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
