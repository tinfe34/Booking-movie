import { Movie, MovieShowTimes } from "interface/movie";
import { CinemaGroup, lcFilm } from "interface/cinema";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "services/movieAPI";
import cinemaAPI from "services/cinemaAPI";

export interface State {
  film: { idFilm: number | null; nameFilm: string };
  listFilm: Movie[];
  cinema: { idCinema: string; nameCinema: string; logo: string };
  listCinema: CinemaGroup[];
  showTime: string;
  listShowTimes: lcFilm[];
  showTimeWatch: {
    maLichChieu: string;
    maRap: string;
    ngayChieuGioChieu: string;
  };

  isLoading: boolean;
  error?: string;
}

//state
const initialState: State = {
  film: { idFilm: null, nameFilm: "" },
  listFilm: [],
  cinema: { idCinema: "", nameCinema: "", logo: "" },
  listCinema: [],
  showTime: "",
  listShowTimes: [],
  showTimeWatch: {
    maLichChieu: "",
    maRap: "",
    ngayChieuGioChieu: "",
  },
  isLoading: false,
  error: undefined,
};

// thunk
export const getListFilmForm = createAsyncThunk(
  "getSticket/getListFilmForm",
  async () => {
    try {
      const listFilm = await movieAPI.getListFilmForm();
      return listFilm;
    } catch (error) {
      throw error;
    }
  }
);

export const getListCinemaForm = createAsyncThunk(
  "getSticket/getListCinemaForm",
  async (MaPhim: number) => {
    try {
      const listCinema = await cinemaAPI.getListCinemaForm(MaPhim);
      return listCinema.heThongRapChieu;
    } catch (error) {
      throw error;
    }
  }
);

const getSticketSlice = createSlice({
  name: "getSticket",
  initialState,
  reducers: {
    getFilm: (state, { payload }) => {
      state.film = payload;
      state.cinema = { idCinema: "", nameCinema: "", logo: "" };
      state.showTime = "";
    },
    getCinema: (state, { payload }) => {
      state.cinema = payload;
      state.showTime = "";
    },
    getShowTimes: (state, { payload }) => {
      state.listShowTimes = payload;
    },
    getShowTime: (state, { payload }) => {
      state.showTime = payload;
      state.showTimeWatch = {
        maLichChieu: "",
        maRap: "",
        ngayChieuGioChieu: "",
      };
    },
    getShowTimeWatch: (state, { payload }) => {
      state.showTimeWatch = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getListFilmForm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListFilmForm.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listFilm = payload;
    });
    builder.addCase(getListFilmForm.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getListCinemaForm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListCinemaForm.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listCinema = payload;
    });
    builder.addCase(getListCinemaForm.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export const {
  getFilm,
  getCinema,
  getShowTimes,
  getShowTime,
  getShowTimeWatch,
} = getSticketSlice.actions;

export default getSticketSlice.reducer;
