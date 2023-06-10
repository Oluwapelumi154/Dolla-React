import React, { useState } from "react";
import NavBar from "../../common/components/Navbar/Navbar";
import Sidebar from "../Sidebar/components/Sidebar";
import Hero from "../Hero/components/Hero";

interface HomeProps {
  renderNavBar: boolean;
}
const Home: React.FC<HomeProps> = ({ renderNavBar }: HomeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {renderNavBar && <NavBar menuToggler={menuToggler} />}
      <Sidebar isOpen={isOpen} menuToggler={menuToggler} />
      <Hero/>
    </>
  );
};

export default Home;
