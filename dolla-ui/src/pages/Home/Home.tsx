import React, { useState } from "react";
import NavBar from "../../common/components/Navbar/Navbar";
import Sidebar from "../Sidebar/components/Sidebar";
import Hero from "../Hero/components/Hero";
import InfoSection from "../InfoSection/components/index";
import {homeObjOne, homeObjTwo, homeObjThree} from '../InfoSection/components/data'
import Services from "../Services/component/Service";
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
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
    </>
  );
};

export default Home;
