import MovieItem from "components/MovieItem/MovieItem";
import { useCallback, useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

//slices
import { getMovieShowing } from "slices/movie";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

//antd
import { Pagination } from "antd";

const MovieList = () => {
  const { movies, totalCount, currentPage, error } = useAppSelector(
    (state) => state.movie
  );
  const dispatch = useAppDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    //Get movie page 1
    dispatch(getMovieShowing(1));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(getMovieShowing(page));
  };

  const handleOpenMovie = useCallback((trailer: string) => {
    setIsOpenModal(true);
    setMovieId(trailer.replace("https://youtu.be/", "").toString());
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section className="movie-list">
      <div className="container">
        <div className="row">
          <h1 className="text-center text-primary my-5">Danh sách phim</h1>
          {movies.map((movie) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 ">
                <MovieItem
                  key={movie.maPhim}
                  movie={movie}
                  openModal={() => handleOpenMovie(movie.trailer)}
                />
              </div>
            );
          })}

          <ModalVideo
            channel="youtube"
            isOpen={isOpenModal}
            videoId={movieId}
            onClose={() => setIsOpenModal(false)}
            youtube={{
              autoplay: 1,
              mute: 1,
            }}
          />
          <Pagination
            style={{
              textAlign: "center",
            }}
            current={currentPage}
            total={totalCount}
            onChange={(page) => onChangePage(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default MovieList;
