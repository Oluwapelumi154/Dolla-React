import { LinkScroll,styled } from "../../../libs";
interface ButtonProps {
    primary?: any;
    big?: boolean;
    dark?: any;
    fontBig?: boolean;
    smooth?: boolean;
    dark2?: any;
    exact?: boolean
}
// #01BF7
export const Button = styled(LinkScroll)<ButtonProps>`
 border-radius: 50px;
 background: ${({primary, theme})=> primary ? theme.colors.lemon : '#010606'};
 white-space: nowrap;
 padding: ${({big})=> big ? '14px 48px': '12px 30px'};
  color: ${({dark})=> dark ? '#010606': '#fff'};
  font-size: ${({fontBig})=> fontBig ? '20px': '16px'};
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> primary ? '#fff': '#01BF7'}
  }
`;