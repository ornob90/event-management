import React, { useContext } from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import SectionHeader from "../../components/Shared/SectionHeader";
import EventCard from "../../components/Shared/EventCard";
import EventContext from "../../context/EventContext";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const events = useContext(EventContext);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Container>
        <SectionHeader title="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.slice(0, 6).map((event) => (
            <EventCard event={event} key={event.eventName} />
          ))}
        </div>

        <div className="flex justify-center items-center w-full">
          <Button
            onClick={() => navigate("/events/events/All")}
            className="bg-orange-600 mt-10 border-none hover:bg-orange-600  text-white py-2 px-4 font-medium rounded-lg mx-auto"
          >
            See more
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Service;
