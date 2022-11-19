import { Fragment } from "react";

import Article from "components/Article/Article";
import Carousel from "components/Carousel/Carousel";
import FormGetSticket from "components/FormGetSticket/FormGetSticket";
import Introduce from "components/Introduce/Introduce";
import ListCinemas from "components/ListCinemas/ListCinemas";
import MovieList from "components/MovieList/MovieList";
import BackToTop from "components/BackToTop/BackToTop";


const HomePage = () => {
  return (
    <Fragment>
      <Carousel />
      <FormGetSticket />
      <MovieList />
      <ListCinemas />
      <Article />
      <Introduce />
      <BackToTop/>
    </Fragment>
  );
};

export default HomePage;
