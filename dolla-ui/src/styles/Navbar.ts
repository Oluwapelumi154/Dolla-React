import { styled, LinkRouter, LinkScroll } from "../libs";
export const Nav = styled.nav`
  height: 80px;
  /* background-color: #071125; */
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  /* margin-top: -80px; */
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 10;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  /* z-index: 1; */
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;
export const NavBrand = styled(LinkRouter)`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  /* justify-self: flex-end; */
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  text-align: center;
  margin-left: 22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkScroll)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  /* height: 100%; */
  cursor: pointer;

  &:active {
    border-bottom: 2px solid ${({theme})=> theme.colors.lemon};
  }
`;
export const NavBtnLink = styled(LinkRouter)`
  outline: 0;
  border: 0;
  border-radius: 50px;
  white-space: nowrap;
  background-color: ${({theme})=> theme.colors.lemon};
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    color: #010606;
  }
`;

export const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
