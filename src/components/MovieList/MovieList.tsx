import MovieItem from "components/MovieItem/MovieItem";
import { useEffect, useState } from "react";

//store
import { getMovieShowing } from "slices/movie";
import { hideLoading, showLoading } from "slices/loadingSlice";
import { useAppDispatch, useAppSelector } from "hooks/store";

const MovieList = () => {
  const { movies, totalPages, isLoading, error } = useAppSelector(
    (state) => state.movie
  );

  const dispatch = useAppDispatch();

  const [pagState, changePagState] = useState(0);

  function toggleActive(index: number) {
    changePagState(index);
    console.log(pagState);
  }

  function toggleActiveStyles(index: number) {
    if (pagState === index) return "page-item active";
    else return "page-item";
  }

  useEffect(() => {
    dispatch(getMovieShowing(1));
  }, []);

  const renderPagination = (currentPage: number) => {
    const countPage = [];
    for (let index = 1; index <= currentPage; index++) {
      countPage.push(index);
    }
    return countPage;
  };

  if (isLoading) {
    dispatch(showLoading());
    return <div></div>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  dispatch(hideLoading());

  return (
    <div className="movie-list">
      <div className="container">
        <div className="row">
          <div className="col-sm-12" id="film-header">
            <h1 className="text-center">Danh sách phim</h1>
          </div>

          {movies.map((movie) => {
            return <MovieItem key={movie.maPhim} movie={movie} />;
          })}

          <div className="col-sm-12">
            <ul className="pagination justify-content-center mt-3">
              {renderPagination(totalPages).map((pag, index) => {
                return (
                  <li
                    className={toggleActiveStyles(index)}
                    key={pag}
                    onClick={() => toggleActive(index)}
                  >
                    <a
                      className="page-link"
                      role="button"
                      href="#film-header"
                      onClick={() => {
                        dispatch(getMovieShowing(pag));
                      }}
                    >
                      {pag}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className="container back__news"
          style={{
            backgroundImage: "url('./images/icons/back-news.png')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MovieList;
