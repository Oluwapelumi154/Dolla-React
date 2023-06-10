import React from "react";
import { Navprops } from "../../../interfaces";
import { FaBars } from "../../../libs";
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
} from "../../../styles/Navbar";

const NavBar: React.FC<Navprops> = ({ menuToggler }: Navprops) => {
  return (
    <Nav>
      <NavContainer>
        <NavBrand to="/">dolla</NavBrand>
        <MobileIcon onClick={menuToggler}>
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
