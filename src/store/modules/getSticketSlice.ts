import { Movie, Film } from "interface/movie";
import { CinemaGroup, lcFilm } from "interface/cinema";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "services/movieAPI";
import cinemaAPI from "services/cinemaAPI";

export interface State {
  isOk: boolean;
  selectFilm: Film;
  selectCinema: { idCinema: string; nameCinema: string; logo: string };
  selectDate: string;
  selectShowtime: {
    maLichChieu: string;
    maRap: string;
    ngayChieuGioChieu: string;
  };
  listFilm: Movie[];
  listCinema: CinemaGroup[];
  listViewingDate: lcFilm[];
  isLoading: boolean;
  error?: string;
}

//state
const initialState: State = {
  isOk: false,
  selectFilm: { idFilm: null, nameFilm: "" },
  selectCinema: { idCinema: "", nameCinema: "", logo: "" },
  selectDate: "",
  selectShowtime: {
    maLichChieu: "",
    maRap: "",
    ngayChieuGioChieu: "",
  },
  listFilm: [],
  listCinema: [],
  listViewingDate: [],
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
    changeFilm: (state, { payload }) => {
      state.selectFilm = payload;

      //reset
      state.selectCinema = { idCinema: "", nameCinema: "", logo: "" };
      state.selectDate = "";
      state.selectShowtime = {
        maLichChieu: "",
        maRap: "",
        ngayChieuGioChieu: "",
      };
      state.isOk = false;
    },
    changeCinema: (state, { payload }) => {
      state.selectCinema = payload;

      //reset
      state.selectDate = "";
      state.selectShowtime = {
        maLichChieu: "",
        maRap: "",
        ngayChieuGioChieu: "",
      };
      state.isOk = false;
    },
    changeDate: (state, { payload }) => {
      state.selectDate = payload;

      //reset
      state.isOk = false;
      state.selectShowtime = {
        maLichChieu: "",
        maRap: "",
        ngayChieuGioChieu: "",
      };
    },
    getViewingDate: (state, { payload }) => {
      state.listViewingDate = payload;
    },
    getShowtime: (state, { payload }) => {
      state.selectShowtime = payload;
      state.isOk = true;
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
  changeFilm,
  changeCinema,
  changeDate,
  getViewingDate,
  getShowtime,
} = getSticketSlice.actions;

export default getSticketSlice.reducer;
