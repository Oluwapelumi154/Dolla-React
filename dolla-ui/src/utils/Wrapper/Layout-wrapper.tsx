import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
const LayoutWrapper = (props: any) => {
  const { displayNav, displayFooter, Component } = props;
  return (
    <>
      {displayNav && <NavBar />}
      <Component />
      {displayFooter && <Footer />}
    </>
  );
};

export default LayoutWrapper;