import React from "react";
import Container from "../../components/Shared/Container";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Button from "../../components/Shared/Button";

const Detail = () => {
  const getYearMonthDay = (date) => {
    return date.split("-");
  };

  const [year, month, day] = getYearMonthDay("2023-05-30");

  return (
    <div className="-mt-16 mb-16">
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
            Farewell Retirement BBQ ({" "}
            <span className="text-orange-600">$500</span> )
          </h1>

          <p className="font-semibold text-medium ">Retirement Party</p>

          <p className="text-gray-700 w-[90%]">
            A casual BBQ farewell party for David's retirement, featuring
            grilled delights and outdoor games. It's time to bid farewell to
            David as he embarks on a new chapter of life. Join us for a relaxed
            BBQ gathering in the Smith family backyard. No formal speeches are
            scheduled, just good food, great company, and a fond farewell to a
            dear colleague and friend.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CiLocationArrow1 className="text-xl" />
              <p>Smith Family Backyard</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlinePhone className="text-xl" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineMail className="text-xl" />
              <p>colleagues@example.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-1 px-10 py-10 border border-gray-300 shadow-lg justify-between min-h-[300px]">
          <div className="flex justify-between  items-center">
            <div>
              <p className="font-bold text-xl">Start</p>
              <p className="text-gray-600 mt-2 font-medium">6:30 PM</p>
            </div>
            <div>
              <p className="font-bold text-xl">End</p>
              <p className="text-gray-600 mt-2 font-medium">7:30 PM</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="border-2 border-gray-600 py-2 px-5 font-semibold">
              {year}
            </p>
            <p className="text-3xl font-bold">:</p>
            <p className="border-2 border-gray-600 py-2 px-5 font-semibold">
              {month}
            </p>
            <p className="text-3xl font-bold">:</p>
            <p className="border-2 border-gray-600 py-2 px-5 font-semibold">
              {day}
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
