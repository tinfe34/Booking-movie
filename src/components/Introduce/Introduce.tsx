import Slider from "react-slick";

//scss
import "./Introduce.scss";

const Introduce = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSlide = () => {
    let arrSlide = [];

    for (let i = 1; i < 17; i++) {
      let arrImng = (
        <div key={i} style={{ overflow: "hidden" }}>
          <img
            className="img-responsive carousel__img__item"
            src={`./images/icons/slide/slide${i}.jpg`}
          />
        </div>
      );

      arrSlide.push(arrImng);
    }

    return arrSlide;
  };

  return (
    <div
      className="intro mt-5"
      id="ungdung"
      style={{ backgroundImage: "url('./images/icons/backapp.jpg')" }}
    >
      <div className="container">
        <div className="row intro__content">
          <div className="col-12 col-sm-12 col-md-6 intro__info">
            <h2 className="text-white">Ứng dụng tiện lợi dành cho </h2>
            <h2 className="text-white"> người yêu điện ảnh</h2>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button>App miễn phí - Tải về ngay!</button>
            <p>TIX có hai phiên bản iOS & Android</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 intro__carousel">
            <img className="imgPhone" src="./images/icons/mobile.png" />
            <div id="carousel__app">
              <Slider {...settings}>{renderSlide()}</Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
