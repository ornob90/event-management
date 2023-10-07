import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Shared/Button";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-orange-600 text-white py-2 px-3 rounded-lg" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "bg-orange-600 text-white py-2 px-3 rounded-lg" : ""
          }
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </li>
    </>
  );

  const { pathname } = useLocation();

  return (
    <div
      className={`z-[12] bg-transparent text-white ${
        pathname !== "/" ? "bg-gray-600" : "backdrop-blur-lg "
      }  navbar w-[full] px-10 mx-auto max-w-[1440px]`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-[10] bg-black text-white hove:bg-none"
          >
            <li className="mb-4 flex items-center flex-row ">
              <div className="md:hidden h-[30px] w-[30px] rounded-full border border-black"></div>
              <p className="md:hidden">Towfiq</p>
            </li>
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-lg md:text-2xl">
          GatherJoy
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between gap-4 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex justify-end gap-4 items-center">
        <p className="hidden md:block ">Towfiq</p>
        <div className="hidden md:block h-[30px] w-[30px] rounded-full border border-black"></div>

        <Button className="text-sm md:text-base py-[5px] px-3 bg-orange-500 text-white rounded-lg">
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
