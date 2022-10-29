import MovieItem from "components/MovieItem/MovieItem";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

//store
import { getMovieShowing } from "slices/movie";
import { useAppDispatch, useAppSelector } from "hooks/store";

const MovieList = () => {
  const { movies, totalPages, isLoading, error } = useAppSelector(
    (state) => state.movie
  );
  const dispatch = useAppDispatch();

  // const [pagState, changePagState] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [movieId, setMovieId] = useState("");

  // function toggleActive(index: number, pag: number) {
  //   changePagState(index);
  //   dispatch(getMovieShowing(pag));
  // }

  // function toggleActiveStyles(index: number) {
  //   if (pagState === index) return "page-item active";
  //   else return "page-item";
  // }
  // const renderPagination = (currentPage: number) => {
  //   const countPage = [];
  //   for (let index = 1; index <= currentPage; index++) {
  //     countPage.push(index);
  //   }
  //   return countPage;
  // };
  useEffect(() => {
    dispatch(getMovieShowing(1));
  }, []);

  const handleOpenMovie = (trailer: string) => {
    setIsOpenModal(true);
    setMovieId(trailer.replace("https://youtu.be/", "").toString());
  };

  if (error) {
    return <h1>{error}</h1>;
  }
  console.log(movies);
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
              mute: 1
            }}
          />
          {/* <ul className="pagination justify-content-center mt-3">
            {renderPagination(totalPages).map((pag, index) => {
              return (
                <li
                  className={toggleActiveStyles(index)}
                  key={pag}
                  onClick={() => toggleActive(index, pag)}
                >
                  <button className="page-link" role="button">
                    {pag}
                  </button>
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
