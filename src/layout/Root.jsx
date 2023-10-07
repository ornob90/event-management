import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import EventProvider from "../provider/EventProvider";

const Root = () => {
  return (
    <EventProvider>
      <div className="relative max-w-[1440px] mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </EventProvider>
  );
};

export default Root;
