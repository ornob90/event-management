import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-xl image-full h-[300px]">
      <figure>
        <img
          src={event.img}
          alt="Shoes"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h1 className="pb-6 card-title text-2xl font-bold z-[-1] h-[45%] w-full">
          {event.eventName}
        </h1>
        <p className="text-base w-full md:w-[90%]">{event.shortDesc}</p>
        <div className="card-actions justify-end items-center">
          <p className="font-semibold text-xl">
            Price: <span>{event.price}</span>$
          </p>
          <Button
            onClick={() => navigate(`/event/${event.id}`)}
            className="bg-black border-none hover:bg-black text-white py-2 px-4 font-medium rounded-lg"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
