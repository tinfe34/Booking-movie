
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import { Movie } from "interface/movie";

//img
import playImg from "../../assets/images/play-video.png";
import ButtonCustom from "ui/ButtonCustom/ButtonCustom";

//scss
import "./MovieItem.scss";

type MovieItemProps = {
  movie: Movie;
  openModal: Function
};

const MovieItem = (props: MovieItemProps) => {
  const { movie, openModal } = props;
  

  return (
    <Card
      className="card-custom"
      cover={<img alt={movie.hinhAnh} src={movie.hinhAnh} />}
    >
      <img src={playImg} alt="" className="play-video" onClick={() => openModal()} />
      <NavLink to={`/detail/${movie.maPhim}`}>
        <ButtonCustom className="card-btn" width="200px">
          Mua vé
        </ButtonCustom>
      </NavLink>
    </Card>
  );
};

export default memo(MovieItem);
