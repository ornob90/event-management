import Container from "../Shared/Container";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-banner h-screen min-h-[300px]  flex justify-center items-center -mt-16">
      <h1
        data-aos="fade-up"
        className="text-center text-2xl md:text-4xl lg:text-5xl font-bold"
      >
        Social Event Manager:
        <br /> Celebrate Moments, Create Memories
      </h1>
    </div>
  );
};

export default Banner;
