import MovieItem from "components/MovieItem/MovieItem";
import { useCallback, useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

//slices
import { getMovieShowing } from "store/modules/movie";

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

  const handleOpenMovie = useCallback((trailer: string) => {
    setIsOpenModal(true);
    setMovieId(trailer.replace("https://youtu.be/", "").toString());
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section className="movie-list" id="danhsachphim">
      <div className="container">
        <div className="row">
          <h1 className="text-center text-primary my-5">Danh sách phim</h1>
          {movies.map((movie) => {
            return (
              <MovieItem
                key={movie.maPhim}
                movie={movie}
                openModal={() => handleOpenMovie(movie.trailer)}
              />
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
        </div>
      </div>
    </section>
  );
};

export default MovieList;
