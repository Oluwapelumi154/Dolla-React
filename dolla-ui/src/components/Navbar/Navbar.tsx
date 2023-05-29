import React from "react";
import {
  Nav,
  NavBrand,
  NavLinks,
  NavMenu,
  NavBtnLink,
  NavContainer,
  NavButtonContainer,
  MobileIcon,
  NavItem,
} from "../../styles/Navbar";
import { FaBars } from "../../libs";
const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavBrand to="/">dolla</NavBrand>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/sign-up">Sign up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavButtonContainer>
          <NavBtnLink to="/sign-in">SignIn</NavBtnLink>
        </NavButtonContainer>
      </NavContainer>
    </Nav>
  );
};
export default NavBar;
