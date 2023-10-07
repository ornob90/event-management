import React, { useEffect, useState } from "react";
import EventContext from "../context/EventContext";

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <EventContext.Provider value={events}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
