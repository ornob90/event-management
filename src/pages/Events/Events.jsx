import React, { useEffect } from "react";
import Container from "../../components/Shared/Container";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";

const Events = () => {
  const navigate = useNavigate();
  const eventType = [
    "All",
    "Wedding",
    "Birthday",
    "Anniversary",
    "Baby Shower",
    "Retirement",
    "Marriage",
  ];

  useEffect(() => {
    navigate("/events/events/All");
  }, []);

  return (
    <Container>
      <ul className="h-[100px] mx-auto  flex flex-wrap justify-center gap-4 items-center mt-10">
        {eventType.map((category) => (
          <li key={category}>
            <NavLink
              to={`events/${category}`}
              className="bg-black text-white px-3 py-2 rounded-lg "
              type="button"
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </Container>
  );
};

export default Events;
