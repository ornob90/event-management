import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Events from "../pages/Events/Events";
import EventsByCatg from "../pages/Events/EventsByCatg";

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
    ],
  },
]);
