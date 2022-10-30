import { CinemaGroup, SysCinemaForm } from "interface/cinema";
import { SysCinema } from "interface/movie";
import axiosClient from "./axiosClient";

const cinemaAPI = {
  getSystemCinemas: () => {
    return axiosClient.get<SysCinema[]>(
      "QuanLyRap/LayThongTinLichChieuHeThongRap",
      {
        params: {
          maNhom: "GP02",
        },
      }
    );
  },
  getListCinemaForm: (MaPhim: number) => {
    return axiosClient.get<SysCinemaForm>(
      "QuanLyRap/LayThongTinLichChieuPhim",
      {
        params: {
          MaPhim: MaPhim || null,
        },
      }
    );
  },
};
export default cinemaAPI;
