import React, { useEffect } from "react";
import Container from "../../components/Shared/Container";
import SectionHeader from "../../components/Shared/SectionHeader";

import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const reviews = [
    {
      id: 1,
      comment:
        "I had an amazing experience planning my wedding with this platform. The support was exceptional, and our special day turned out perfect!",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 2,
      comment:
        "I used this service to organize my daughter's birthday party, and it was a breeze. The tools and features made planning effortless, and the party was a huge success!",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      comment:
        "I couldn't have asked for a better experience planning our anniversary dinner. The platform provided all the resources we needed, and the event turned out to be truly memorable.",
      img: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="w-full min-h-[300px] bg-gray-300 mt-8 flex justify-center items-center pb-16">
      <Container>
        <SectionHeader title="Testimonial" />

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {reviews.map(({ id, comment, img }) => (
            <div
              key={id}
              className="flex flex-col gap-2 justify-center items-center border border-gray-400 py-8 rounded-lg"
              data-aos={
                id === 1 ? "fade-left" : id === 2 ? "fade-down" : "fade-right"
              }
            >
              <img
                src={img}
                alt=""
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <p className="w-[90%] mx-auto text-center mt-5">{comment}</p>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div
            className="flex flex-col gap-2 justify-center items-center border border-gray-400 py-8 rounded-lg"
            data-aos="fade-left"
          >
            <img
              src={reviews[0].img}
              alt=""
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
            <p className="w-[90%] mx-auto text-center mt-5">
              {reviews[0].comment}
            </p>
          </div>
          <div
            className="flex flex-col gap-2 justify-center items-center border border-gray-400 py-8 rounded-lg"
            data-aos="fade-up"
          >
            <img
              src={reviews[1].img}
              alt=""
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
            <p className="w-[90%] mx-auto text-center mt-5">
              {reviews[1].comment}
            </p>
          </div>
          <div
            className="flex flex-col gap-2 justify-center items-center border border-gray-400 py-8 rounded-lg"
            data-aos="fade-right"
          >
            <img
              src={reviews[0].img}
              alt=""
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
            <p className="w-[90%] mx-auto text-center mt-5">
              {reviews[0].comment}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
