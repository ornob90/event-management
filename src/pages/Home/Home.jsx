import React, { useEffect, useState } from "react";
import Banner from "../../components/Header/Banner";
import Service from "./Service";
import { useLoaderData } from "react-router-dom";
import EventType from "./EventType";

const Home = () => {
  const events = useLoaderData();

  return (
    <>
      <Banner />
      <EventType />
      <Service events={events} />
    </>
  );
};

export default Home;
