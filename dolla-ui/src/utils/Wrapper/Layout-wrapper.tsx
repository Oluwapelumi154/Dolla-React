import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../pages/Footer/components/Footer";
import Sidebar from "../../pages/Sidebar/components/Sidebar";
interface Layout {
  renderNavComponent: any;
  renderFooterComponent: any;
  Component: any;
}
const LayoutWrapper: React.FC<Layout> = (props: Layout) => {
  const { renderNavComponent, renderFooterComponent, Component } = props;
  return (
    <>
    <Sidebar/>
      {renderNavComponent && <NavBar />}
      <Component />
      {renderFooterComponent && <Footer />}
    </>
  );
};

export default LayoutWrapper;
