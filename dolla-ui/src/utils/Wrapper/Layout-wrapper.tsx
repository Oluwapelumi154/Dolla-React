import Footer from "../../pages/Footer/components/Footer";
import { LayoutProps } from "../../interfaces";
const LayoutWrapper: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { renderNavBar, renderFooter, Component } = props;
  return (
    <>
      <Component renderNavBar={renderNavBar} />
      {renderFooter && <Footer />}
    </>
  );
};
export default LayoutWrapper;
