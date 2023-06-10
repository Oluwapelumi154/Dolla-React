import { styled, FaTimes, LinkScroll, LinkRouter } from "../../../libs";
interface Styled_SidebarContainer_Props {
  isOpen: boolean,
}
export const SidebarContainer = styled.div<Styled_SidebarContainer_Props>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  z-index: 999;
  opacity: ${({isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({isOpen }) => (isOpen ? "0" : "-100%")};
  
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  outline: none;
  background: transparent;
`;

export const Icon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  @media screen and (max-width: 450px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarItem = styled.li``;

export const SidebarLink = styled(LinkScroll)`
  text-decoration: none;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtnLink = styled(LinkRouter)`
  color: #010606;
  text-decoration: none;
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
