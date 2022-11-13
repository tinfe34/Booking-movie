
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Footer from "layout/Footer/Footer";
import Header from "layout/Header/Header";

const HomeTemplate = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default HomeTemplate;
