import React, { useEffect, useState } from "react";
import Banner from "../../components/Header/Banner";
import Service from "./Service";
import { useLoaderData } from "react-router-dom";
import EventType from "./EventType";
import Testimonial from "./Testimonial";

const Home = () => {
  const events = useLoaderData();

  return (
    <>
      <Banner />
      <EventType />
      <Service events={events} />
      <Testimonial />
    </>
  );
};

export default Home;
