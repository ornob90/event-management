import Container from "../Shared/Container";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-banner h-screen min-h-[300px]  flex justify-center items-center">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
        Social Event Manager:
        <br /> Celebrate Moments, Create Memories
      </h1>
    </div>
  );
};

export default Banner;
