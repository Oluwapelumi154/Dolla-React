import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import LayoutWrapper from "../utils/Wrapper/Layout-wrapper";

/** Routes */

const routes = [
  {
    path: "/",
    element: (
      <LayoutWrapper displayNav={true} displayFooter={true} Component={Home} />
    ),
  },
  {
    path: "/contact",
    element: (
      <LayoutWrapper
        displayNav={true}
        displayFooter={true}
        Component={Contact}
      />
    ),
  },
  {
    path: "/about",
    element: (
      <LayoutWrapper displayNav={true} displayFooter={true} Component={About} />
    ),
  },
  {
    path: "*",
    element: <h1> Page Not Found </h1>,
  },
];

export const router = createBrowserRouter(routes);
