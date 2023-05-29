import React from "react";
import { createBrowserRouter } from "../libs";
import Home from "../pages/Home/Home";
import About from "../pages/About/components/About";
import Contact from "../pages/Contact/components/Contact";
import LayoutWrapper from "../utils/Wrapper/Layout-wrapper";

/** Routes */

const routes = [
  {
    path: "/",
    element: (
      <LayoutWrapper
        renderNavBar={true}
        renderFooter={true}
        Component={Home}
      />
    ),
  },
  {
    path: "/contact",
    element: (
      <LayoutWrapper
        renderNavBar={true}
        renderFooter={true}
        Component={Contact}
      />
    ),
  },
  {
    path: "/about",
    element: (
      <LayoutWrapper
        renderNavBar={true}
        renderFooter={true}
        Component={About}
      />
    ),
  },
  {
    path: "*",
    element: <h1> Page Not Found </h1>,
  },
];

export const router = createBrowserRouter(routes);
