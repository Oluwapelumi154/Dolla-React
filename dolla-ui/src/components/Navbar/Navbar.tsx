import React from "react";
import { Nav, NavBrand, NavLinks, NavButton} from "../../styles/Navbar";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Nav>
      <NavBrand>dolla</NavBrand>
      <NavLinks>
        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </NavLinks>
      <NavButton>Signup</NavButton>
    </Nav>
  );
};
export default NavBar;
