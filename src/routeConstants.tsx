import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import NotFound from "./Screens/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
