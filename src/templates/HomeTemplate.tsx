import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Footer from "layout/Footer/Footer";
import Header from "layout/Header/Header";
import BackToTop from "components/BackToTop/BackToTop";

const HomeTemplate = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop/>
    </Fragment>
  );
};

export default HomeTemplate;
