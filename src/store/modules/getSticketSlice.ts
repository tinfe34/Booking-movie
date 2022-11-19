import { Movie, Film } from "interface/movie";
import { CinemaGroup, lcFilm } from "interface/cinema";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "services/movieAPI";
import cinemaAPI from "services/cinemaAPI";

export interface State {
  isOk: boolean;
  selectFilm: Film;
  selectCinema: { idCinema: string; nameCinema: string; logo: string };
  selectTime: string;
  selectShowtime: {
    maLichChieu: string;
    maRap: string;
    ngayChieuGioChieu: string;
  };
  listFilm: Movie[];
  listCinema: CinemaGroup[];
  listShowTimes: lcFilm[];
  isLoading: boolean;
  error?: string;
}

//state
const initialState: State = {
  isOk: false,
  selectFilm: { idFilm: null, nameFilm: "" },
  selectCinema: { idCinema: "", nameCinema: "", logo: "" },
  selectTime: "",
  selectShowtime: {
    maLichChieu: "",
    maRap: "",
    ngayChieuGioChieu: "",
  },
  listFilm: [],
  listCinema: [],
  listShowTimes: [],
  isLoading: false,
  error: undefined,
};

// thunk
export const getListFilmForm = createAsyncThunk(
  "getSticket/getListFilmForm",
  async () => {
    try {
      return await movieAPI.getListFilmForm();
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
      state.selectFilm = payload;

      //reset
      state.selectCinema = { idCinema: "", nameCinema: "", logo: "" };
      state.selectTime = "";
      state.selectShowtime = {
        maLichChieu: "",
        maRap: "",
        ngayChieuGioChieu: "",
      };
      state.isOk = false;
    },
    getCinema: (state, { payload }) => {
      state.selectCinema = payload;

      //reset
      state.selectTime = "";
      state.selectShowtime = {
        maLichChieu: "",
        maRap: "",
        ngayChieuGioChieu: "",
      };
      state.isOk = false;
    },
    getShowTimes: (state, { payload }) => {
      state.listShowTimes = payload;
    },
    getShowTime: (state, { payload }) => {
      state.selectTime = payload;

      //reset
      state.isOk = true;
      state.selectShowtime = {
        maLichChieu: "",
        maRap: "",
        ngayChieuGioChieu: "",
      };
    },
    getShowTimeWatch: (state, { payload }) => {
      state.selectShowtime = payload;
      state.isOk = false;
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
