import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
const LayoutWrapper = (props: any) => {
  const {  renderNavComponent, renderFooterComponent, Component } = props;
  return (
    <>
        {renderNavComponent && <NavBar />}
      <Component />
      {renderFooterComponent && <Footer />}
      
    </>
  );
};

export default LayoutWrapper;
