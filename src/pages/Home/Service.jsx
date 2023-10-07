import React from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import SectionHeader from "../../components/Shared/SectionHeader";

const Service = ({ events }) => {
  return (
    <div className="w-full">
      <Container>
        <SectionHeader title="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.slice(0, 6).map((event) => (
            <div
              key={event.eventName}
              className="card bg-base-100 shadow-xl image-full h-[300px]"
            >
              <figure>
                <img
                  src={event.img}
                  alt="Shoes"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h1 className="pb-6 card-title text-2xl font-bold z-[-1]">
                  {event.eventName}
                </h1>
                <p className="text-base w-full md:w-[90%]">{event.shortDesc}</p>
                <div className="card-actions justify-end items-center">
                  <p className="font-semibold text-xl">
                    Price: <span>{event.price}</span>$
                  </p>
                  <Button className="bg-black border-none hover:bg-black text-white py-2 px-4 font-medium rounded-lg">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full">
          <Button className="bg-orange-600 mt-10 border-none hover:bg-orange-600  text-white py-2 px-4 font-medium rounded-lg mx-auto">
            See more
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Service;
