import React from "react";
import { SidebarProps } from "../../../interfaces";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
  SidebarBtnWrapper,
  SidebarBtnLink,
} from "../styles/Sidebar";
const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { isOpen, menuToggler } = props;
  return (
    <SidebarContainer isOpen={isOpen} onClick={menuToggler}>
      <CloseIcon onClick={menuToggler}>
        <Icon onClick={menuToggler}/>
      </CloseIcon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/about" onClick={menuToggler}>About</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/discover" onClick={menuToggler}>Discover</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/services" onClick={menuToggler}>Services</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/sign-up" onClick={menuToggler}>SignUp</SidebarLink>
          </SidebarItem>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarBtnLink to="/sign-In" onClick={menuToggler}>Sign In</SidebarBtnLink>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
