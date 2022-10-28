import { dataMovies } from "interface/dataMovie";
import { Movie } from "interface/movie";
import axiosClient from "./axiosClient";

const movieAPI = {
  getMovieShowing: (currentPage: number) => {
    return axiosClient.get<any, dataMovies>(
      "QuanLyPhim/LayDanhSachPhimPhanTrang",
      {
        params: {
          maNhom: "GP02",
          soPhanTuTrenTrang: 8,
          soTrang: currentPage,
        },
      }
    );
  },
  getListFilmForm: () => {
    return axiosClient.get<any, Movie[]>("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP02",
      },
    });
  },
  getMovieDetail: (maPhim: string) => {
    return axiosClient.get<Movie>("QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: maPhim,
      },
    });
  },
};

export default movieAPI;
