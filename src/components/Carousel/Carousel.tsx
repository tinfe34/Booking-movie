import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hooks/store";
import cn from "classnames";

//scss
import "./Carousel.scss";

//slice
import { getBanner } from "slices/bannerSlice";

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

  return (
    <section
      id="carouselExampleIndicators"
      className="carousel slide movie__carousel"
      data-ride="carousel"
    >
      <ol
        className="carousel-indicators carousel__button"
        style={{ zIndex: "1" }}
      >
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div
        className="carousel-inner movie__carousel__item"
        style={{ maxHeight: "700px" }}
      >
        {banners.map((banner, index) => {
          return (
            <div
              className={cn(index === 0 ? "active" : "", "carousel-item")}
              key={banner.maBanner}
            >
              <img src={banner.hinhAnh} className="d-block w-100" />
            </div>
          );
        })}
      </div>
      <a
        className="carousel-control-prev "
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span aria-hidden="true">
          <i
            className="fa-solid fa-caret-left"
            style={{ fontSize: "50px" }}
          ></i>
        </span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span aria-hidden="true">
          <i
            className="fa-solid fa-caret-right"
            style={{ fontSize: "50px" }}
          ></i>
        </span>
      </a>
    </section>
  );
};

export default Carousel;
