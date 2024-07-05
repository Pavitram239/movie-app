import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MovieBooking, MovieDetail, Movies } from "./pages";
import { loader as movieLoader } from "./pages/Movies";
import { loader as detailLoader } from "./pages/MovieDetail";
import { loader as bookingLoader } from "./pages/MovieBooking";
import { action as bookingAction } from "./pages/MovieBooking";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Movies />,
        loader: movieLoader,
      },
      {
        path: "/:id",
        element: <MovieDetail />,
        loader: detailLoader,
      },
      {
        path: "/movie-booking/:id",
        element: <MovieBooking />,
        loader: bookingLoader,
        action: bookingAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
