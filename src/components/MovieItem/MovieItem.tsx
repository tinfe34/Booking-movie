import { Modal } from "antd";
import { Movie } from "interface/movie";
import { useState } from "react";
import { NavLink } from "react-router-dom";

//scss
import'./MovieItem.scss'

type Props = {
  movie: Movie;
};

const MovieItem = (props: Props) => {
  const { movie } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [urlVideo, setUrlVideo] = useState("");

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
      <div className="card position-relative card-film mb-3">
        <img
          className="card-img-top"
          src={movie.hinhAnh}
          alt={movie.hinhAnh}
          width="100%"
          height="300px"
        />

        <div className="card-body bottom-0 w-100 justify-content-between position-absolute card-film-body">
          <button
            className="btn btn-danger py-2 px-3 mr-2"
            onClick={() => {
              setIsModalVisible(true);
              setUrlVideo(movie.trailer);
            }}
          >
            Trailer
          </button>
          <button className="btn btn-danger py-2 px-3 btnGetTicket">
            <NavLink to={`/detail/${movie.maPhim}`}>Mua vé</NavLink>
          </button>
        </div>
        <Modal
          title={movie.tenPhim}
          className="movie__modal"
          visible={isModalVisible}
          footer
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <iframe
            className="iframe__modal"
            width="520px"
            height="400px"
            src={urlVideo}
          ></iframe>
        </Modal>
      </div>
    </div>
  );
};

export default MovieItem;
