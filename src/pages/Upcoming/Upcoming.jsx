import React from "react";
import Button from "../../components/Shared/Button";

const Upcoming = () => {
  const countdown = [
    {
      time: 56,
      type: "DAY",
    },
    {
      time: 17,
      type: "HOURS",
    },
    {
      time: 58,
      type: "MINUTES",
    },
    {
      time: 34,
      type: "SECONDS",
    },
  ];

  return (
    <div className=" w-full min-h-[90vh] flex justify-center items-center bg-upcoming">
      <div className="flex flex-col gap-12">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Discover What's Around the Corner"
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-[50%] mx-auto">
          {countdown.map((item) => (
            <div
              key={item.type}
              className="space-y-2 border border-white text-orange-400 text-center py-1"
            >
              <h3 className="text-lg sm:text-xl  font-semibold">{item.time}</h3>
              <p className="text-[10px] sm:text-sm">{item.type}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <button
            data-aos="fade-left"
            className="py-[5.5px] px-2 bg-orange-600 text-white  active:scale-95 duration-300"
          >
            REGISTER NOW
          </button>
          <button
            data-aos="fade-right"
            className="border-white border py-1 px-2 text-white active:scale-95 duration-300"
          >
            BECOME A SPONSOR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
