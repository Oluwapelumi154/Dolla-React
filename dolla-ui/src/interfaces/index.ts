export interface SidebarProps {
  isOpen: boolean;
  menuToggler: any;
}

export interface Navprops {
  menuToggler: any;
}

export interface LayoutProps {
  renderNavBar: any;
  renderFooter: any;
  Component: any;
}

export interface InfoSectionProps {
  id: string,
  lightBg: boolean,
  lightText: boolean,
  lightTextDesc: boolean,
  topLine: string,
  headLine: string,
  description: string
  buttonLabel: string,
  imgStart: boolean,
  img: any,
  alt: string,
  dark: boolean,
  primary: boolean,
  darkText: boolean
}