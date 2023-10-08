import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import EventProvider from "../provider/EventProvider";
import Footer from "../pages/Footer/Footer";
import AuthProvider from "../provider/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <AuthProvider>
      <EventProvider>
        <div className="relative max-w-[1440px] mx-auto">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </EventProvider>
    </AuthProvider>
  );
};

export default Root;
