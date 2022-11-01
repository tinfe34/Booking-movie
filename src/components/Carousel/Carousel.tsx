import { useEffect } from "react";

//hooks
import { useAppSelector, useAppDispatch } from "hooks/store";

//scss
import "./Carousel.scss";

//slice
import { getBanner } from "slices/bannerSlice";
import Slider from "react-slick";

const Carousel = () => {
  const { banners, isLoading, error } = useAppSelector((state) => state.banner);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBanner());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="movie-carousel">
      <Slider {...settings}>
        {banners.map((banner, index) => {
          return (
            <div
              key={banner.maBanner}
            >
              <img src={banner.hinhAnh} className="banner w-100" />
            </div>
          );
        })}
        
      </Slider>
    </section>
  );
};

export default Carousel;
