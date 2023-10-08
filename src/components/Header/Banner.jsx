import Container from "../Shared/Container";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-banner h-screen min-h-[300px]  flex flex-col justify-center items-center -mt-16 gap-16">
      <h1
        data-aos="fade-up"
        className="text-center text-2xl md:text-4xl lg:text-5xl font-bold"
      >
        Social Event Manager:
        <br /> Celebrate Moments, Create Memories
      </h1>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <button
          data-aos="fade-left"
          className="py-[5.5px] px-2 bg-orange-600 text-white  active:scale-95 duration-300  border border-white"
        >
          EXPLORE THE EVENTS
        </button>
        <button
          data-aos="fade-right"
          className="border-black border py-1 px-2 text-black active:scale-95 duration-[.3s] hover:bg-black hover:text-white"
        >
          BECOME A SPONSOR
        </button>
      </div>
    </div>
  );
};

export default Banner;
