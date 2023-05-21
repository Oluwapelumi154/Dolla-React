import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "/contact", element: <Contact /> },
  {
    path: "/about",
    element: <About />,
  },
];
export const router = createBrowserRouter(routes);
