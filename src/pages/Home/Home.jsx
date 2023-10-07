import React, { useEffect, useState } from "react";
import Banner from "../../components/Header/Banner";
import Service from "./Service";
import { useLoaderData } from "react-router-dom";
import EventType from "./EventType";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <EventType />
      <Service />
      <Testimonial />
    </>
  );
};

export default Home;
