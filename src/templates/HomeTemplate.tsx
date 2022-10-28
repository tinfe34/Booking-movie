import Footer from "layout/Footer/Footer";
import Header from "layout/Header/Header";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
