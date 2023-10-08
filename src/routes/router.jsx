import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Events from "../pages/Events/Events";
import EventsByCatg from "../pages/Events/EventsByCatg";
import Price from "../pages/Price/Price";
import Upcoming from "../pages/Upcoming/Upcoming";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/events",
        element: <Events />,
        children: [
          {
            path: "events/:category",
            element: <EventsByCatg />,
          },
        ],
      },
      {
        path: "/event/:id",
        element: <Detail />,
      },
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/upcoming",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
