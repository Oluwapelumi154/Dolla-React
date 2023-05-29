import React, { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../Sidebar/components/Sidebar";
interface HomeProps {
  renderNavBar: boolean;
}
const Home: React.FC<any> = ({ renderNavBar }: HomeProps) => {
  console.log(renderNavBar,"renderNav");
  const [isOpen, setIsOpen] = useState(false);
  const menuToggler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {renderNavBar && <NavBar menuToggler={menuToggler} />}
      <Sidebar isOpen={isOpen} menuToggler={menuToggler} />
    </>
  );
};

export default Home;
