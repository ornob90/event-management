import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Button from "../../components/Shared/Button";
import { useParams } from "react-router-dom";
import EventContext from "../../context/EventContext";

const Detail = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const events = useContext(EventContext);

  useEffect(() => {
    setEvent(events.find((event) => event.id === id));
    // [year, month, day] = getYearMonthDay(event?.date);
  }, [events]);

  return (
    <div className="mb-16">
      <div className="w-full h-[70vh] min-h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1532433517163-b7fec0e9a36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-16 lg:gap-0">
        <div className="space-y-5 lg:col-span-2">
          <h1 className="text-xl sm:text-2xl font-bold">
            {event?.eventName} (
            <span className="text-orange-600">${event?.price}</span> )
          </h1>

          <p className="font-semibold text-medium ">{event?.eventType}</p>

          <p className="text-gray-700 w-[90%]">{event?.description}</p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CiLocationArrow1 className="text-xl" />
              <p>{event?.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlinePhone className="text-xl" />
              <p>{event?.contactPhone}</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineMail className="text-xl" />
              <p>{event?.contactEmail}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-1 px-10 py-10 border border-gray-300 shadow-lg justify-between min-h-[300px]">
          <div className="flex justify-between  items-center">
            <div>
              <p className="font-bold text-xl">Start</p>
              <p className="text-gray-600 mt-2 font-medium">{event?.start}</p>
            </div>
            <div>
              <p className="font-bold text-xl">End</p>
              <p className="text-gray-600 mt-2 font-medium">{event?.end}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="border-2 border-gray-600 py-2 px-5 font-semibold">
              {event?.date?.split("-")[0]}
            </p>
            <p className="text-3xl font-bold">:</p>
            <p className="border-2 border-gray-600 py-2 px-5 font-semibold">
              {event?.date?.split("-")[1]}
            </p>
            <p className="text-3xl font-bold">:</p>
            <p className="border-2 border-gray-600 py-2 px-5 font-semibold">
              {event?.date?.split("-")[2]}
            </p>
          </div>
          <Button className="bg-orange-600 text-white py-2 rounded-md">
            Register
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
