import React from "react";
import Container from "../../components/Shared/Container";
import SectionHeader from "../../components/Shared/SectionHeader";

const EventType = () => {
  return (
    <div className="bg-orange-500 text-white pb-14">
      <Container>
        <SectionHeader title="We Provide" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            data-aos="fade-left"
            className="hover:scale-105 duration-300 bg-wedding rounded-lg shadow-lg h-[300px] flex justify-center items-center"
          >
            <p className="text-gray-600 font-bold text-4xl">Weeding</p>
          </div>

          <div
            data-aos="fade-up"
            className="hover:scale-105 duration-300 bg-birthday rounded-lg shadow-lg h-[300px] flex justify-center items-center"
          >
            <p className="text-gray-600 font-bold text-4xl">Birthday</p>
          </div>

          <div
            data-aos="fade-right"
            className="hover:scale-105 duration-300 bg-anniversary rounded-lg shadow-lg h-[300px] flex justify-center items-center"
          >
            <p className="text-gray-600 font-bold text-4xl">Anniversary</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventType;
