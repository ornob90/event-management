import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import EventContext from "../../context/EventContext";
import EventCard from "../../components/Shared/EventCard";

const EventsByCatg = () => {
  const { category } = useParams();
  const allEvents = useContext(EventContext);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    if (category === "All") {
      setSelectedEvents(allEvents);
      return;
    }

    setSelectedEvents(
      allEvents.filter((event) =>
        event.eventName.toLowerCase().includes(category.toLowerCase())
      )
    );
  }, [allEvents, category]);

  return (
    <Container className="mt-28 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {selectedEvents.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </Container>
  );
};

export default EventsByCatg;
