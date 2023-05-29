import { styled } from "../../../libs";
import { FaTimes } from "../../../libs";
 /* opacity: ${({isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({isOpen }) => (isOpen ? "0" : "-100%")};*/
export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  top: 0;
  transition: 0.3s ease-in-out;
  z-index: 999;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  outline: none;
`;
export const Icon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper= styled.ul``